export const environment = {
  production: false,
  baseUrl: {
    cmsApi: 'http://om-api.ichibajp.com/api',
    cdnUrl: 'http://cdn.ichibajp.com'
  },
  sso: {
    authority: 'http://login.ichibajp.com',
    clientId: 'om',
    requireHttps: false,
    scope: 'openid email profile om-private-api ichiba-identity-api',
    redirectUrl: 'http://om.ichibajp.com/callback',
    postLogoutRedirectUri: 'http://om.ichibajp.com/signout-callback-oidc',
    silentRefreshUrl: 'http://om.ichibajp.com/silent-refresh.html'
  }
};
