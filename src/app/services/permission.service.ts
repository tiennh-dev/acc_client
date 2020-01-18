import { Injectable } from "@angular/core";
import { IS4Service } from "./is4.service";
import { Resource } from "../models/model/is4.model";
import { switchMap, startWith, map, catchError, throttleTime, filter, retryWhen, delayWhen, tap } from "rxjs/operators";
import { OAuthService } from "angular-oauth2-oidc";
import { interval, merge, of, fromEvent, timer } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PermissionService {
    private static RESOURCE_REFRESH_TIME: number = 60000;
    private static ENABLE_ACTION_DELAY_TIME: number = 10;
    private resources: Resource[] = [];
    private resourcesIsLoaded: boolean = false;

    public get Resources(): Resource[] {
        return this.resources;
    }

    private resourceKey: string;

    get ResourceKey(): string {
        return this.resourceKey;
    }

    set ResourceKey(resourceKey: string) {
        this.resourceKey = resourceKey;
        $("body").attr("data-resource-key", resourceKey);
    }

    constructor(private is4Service: IS4Service,
        private oauthService: OAuthService) {
        this.refreshResourceEventListener();
        this.enableActionEventListener();
    }

    private refreshResourceEventListener(): void {
        merge(interval(PermissionService.RESOURCE_REFRESH_TIME))
            .pipe(
                startWith({}),
                filter(() => {
                    const accessTokenExisting = this.oauthService.hasValidAccessToken();

                    if(!accessTokenExisting) {
                        throw 'Access token not found';
                    }

                    return accessTokenExisting;
                }),
                retryWhen(errors =>
                    errors.pipe(
                        delayWhen(() => timer(1000))
                    )
                ),
                switchMap(() => {
                    return this.is4Service.accessGetResources();
                }),                
                map(response => {
                    if (!response.status) {
                        return [];
                    }

                    return response.data;
                }),
                catchError(() => {
                    return of([]);
                })
            ).subscribe(data => { 
                this.resources = data; 
                this.resourcesIsLoaded = true;
            });
    }

    private enableActionEventListener(): void {
        merge(fromEvent(document, 'mouseover'), interval(PermissionService.ENABLE_ACTION_DELAY_TIME))
            .pipe(
                startWith({}),
                throttleTime(PermissionService.ENABLE_ACTION_DELAY_TIME),
                switchMap(() => {
                    return $('[data-action]');
                }),
                catchError(() => {
                    return of([]);
                })
            ).subscribe(async data => {
                let $data = $(data); 
                const action = $data.data('action');
                let target = $data.data('action-target'); 
                if(target) {
                    $data = $data.closest(target);
                }  
                const isAllow = await this.checkPermission(this.resourceKey, action);

                if (!isAllow) {
                    $data.addClass('display-none');

                    return;
                }

                $data.removeClass('display-none');
            });
    }

    public async checkPermission(resourceKey: string, action: string) {
        await this.waitForResourceFirstLoad();

        const resources = this.resources;

        if (!resources || resources.length == 0) {
            return false;
        }

        return resources.some(item => item.code === resourceKey
            && item.actions
            && item.actions.some(actionItem => actionItem === action));
    }

    public async currentPermission(action: string) { 
        return await this.checkPermission(this.resourceKey, action);
    }

    public async checkPermissionLive(resourceKey: string, action: string) {
        var response = await this.is4Service.accessCheckPermission(resourceKey, action).toPromise();

        return response.status;
    }

    private async waitForResourceFirstLoad() {
        while(!this.resourcesIsLoaded) {
            await this.delay(200);
        }
    }

    private delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}