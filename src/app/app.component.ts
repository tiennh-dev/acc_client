import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler, LoginOptions } from 'angular-oauth2-oidc';
import { authConfig } from './common/auth-config';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { PermissionService } from './services/permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private oauthService: OAuthService,
    private permissionService: PermissionService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const self = this;
      this.oauthService.configure(authConfig);
      this.oauthService.setStorage(localStorage);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      const loginOptions = new LoginOptions();
      loginOptions.disableOAuth2StateCheck = true;
      this.oauthService.loadDiscoveryDocumentAndLogin(loginOptions).then((res) => {
        if (res) {
          if (!self.oauthService.hasValidIdToken() || !self.oauthService.hasValidAccessToken()) {
            self.oauthService.initImplicitFlow(window.location.href);
          }
        }
      });

     // this.oauthService.setupAutomaticSilentRefresh();
      this.oauthService.events.subscribe(e => {
        // console.log('oauth/oidc event', e);
      });
      this.oauthService.events
        .pipe(filter(e => e.type === 'token_received'))
        .subscribe(e => {
          console.log('loadUserProfile'); this.oauthService.loadUserProfile();
        });
      this.oauthService.events
        .pipe(filter(e => e.type === 'token_expires'))
        .subscribe(e => {
          console.log('silentRefresh');
          this.oauthService.silentRefresh()
            .then(info => console.log(info))
            .catch(err => console.log(err));
        });
    }
  }

  /**
     * On init
     */
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // this.oauthService.loadDiscoveryDocumentAndTryLogin({
      //   disableOAuth2StateCheck: true
      // }).then(_ => {
      //   if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
      //     this.oauthService.initImplicitFlow(window.location.href);
      //   }
      // });
    }
  }
}
