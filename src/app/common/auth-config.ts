import { AuthConfig } from 'angular-oauth2-oidc';
import { ConfigSetting } from './config-setting';

export const authConfig: AuthConfig = {
    // Url of the Identity Provider
    issuer: ConfigSetting.SSO_AUTHORITY,
    requireHttps: false,
    // URL of the SPA to redirect the user to after login
    redirectUri: ConfigSetting.SSO_REDIRECT_URL,
    // URL of the SPA to redirect the user after silent refresh
    silentRefreshRedirectUri: ConfigSetting.SSO_SILENT_REFRESH_URL,
    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: ConfigSetting.SSO_CLIENTID,
    // set the scope for the permissions the client should request
    scope: ConfigSetting.SSO_SCOPE,
    postLogoutRedirectUri: ConfigSetting.SSO_POST_LOGOUT_REDIRECT_URI,
    showDebugInformation: true,
    sessionChecksEnabled: true
};
