// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: {
    cmsApi: 'http://localhost:5003/api',
    cdnUrl: 'http://cdn.ichibajp.com'
  },
  sso: {
    authority: 'http://login.ichibajp.com',
    clientId: 'om', requireHttps: false,
    scope: 'openid email profile om-private-api ichiba-identity-api',
    redirectUrl: 'http://localhost:4200/callback',
    postLogoutRedirectUri:  'http://localhost:4200/signout-callback-oidc',
    silentRefreshUrl: 'http://localhost:4200/silent-refresh.html'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
