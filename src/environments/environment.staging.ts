export const environment = {
  production: false,
  baseUrl: {
    cmsApi: 'http://cms-api.ichibajp.com/api',
    cdnUrl: 'http://cdn.ichibajp.com'
  },
  sso: {
    authority: 'https://login.ichibajp.com',
    clientId: 'om', requireHttps: false,
    scope: 'openid email profile om-private-api ichiba-identity-api',
    redirectUrl: 'http://cms.ichibajp.com/callback',
    postLogoutRedirectUri:  'http://cms.ichibajp.com/signout-callback-oidc',
    silentRefreshUrl: 'http://cms.ichibajp.com/silent-refresh.html'
  }
};
