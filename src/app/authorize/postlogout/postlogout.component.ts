import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { ConfigSetting } from '../../common/config-setting';

@Component({
    template: 'logout'
})
export class PostLogoutComponent implements OnInit {
    constructor(
        private oauthService: OAuthService,
        private router: Router
    ) { }

    ngOnInit() {

    }
}
