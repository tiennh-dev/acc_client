import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { ConfigSetting } from '../../common/config-setting';

@Component({
    template: 'callback'
})
export class CallbackComponent implements OnInit {
    constructor(
        private oauthService: OAuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
            if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
                this.oauthService.initImplicitFlow();
            } else {
                this.router.navigate(['home']);
            }
        });
    }
}
