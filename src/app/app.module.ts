import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContentComponent } from './shared/layouts/content/content.component';
import { AuthGuard } from './services/auth/auth.guard';
import { TokenInterceptor } from './services/auth/token.interceptor';
import { OAuthStorage, OAuthModule } from 'angular-oauth2-oidc';
import { ServerTokenStoreService, BrowserTokenStoreService } from './services/auth/token-store.service';
import { CallbackComponent } from './authorize/callback/callback.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BlockUIModule } from 'ng-block-ui';

import { HttpClientService } from './services/http-client.service';
import { UtilityService } from './services/utility.service';
import { ConfirmationDialogService } from './services/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog.component';
import { PostLogoutComponent } from './authorize/postlogout/postlogout.component';
import { DotComponent } from './shared/workflow/viz/dot.component';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import { IS4Service } from './services/is4.service';
import { PermissionService } from './services/permission.service';
import { PermissionGuard } from './services/auth/permission.guard';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    CallbackComponent,
    PostLogoutComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    // FormsModule,
    // ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    // NgbPaginationModule,
    DataTablesModule,

    HttpClientModule,
    OAuthModule.forRoot(),
    // tslint:disable-next-line: deprecation
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    BlockUIModule.forRoot({
      delayStart: 100,
      delayStop: 500
    }),
    KeyboardShortcutsModule.forRoot()
  ],
  providers: [
    AuthGuard,
    PermissionGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: OAuthStorage,
      useClass: ServerTokenStoreService
    },
    {
      provide: OAuthStorage,
      useClass: BrowserTokenStoreService
    },
    {
      provide: 'BASE_URL', useFactory: getBaseUrl
    },

    HttpClient,
    HttpClientService,
    UtilityService,
    ToastrService,
    ConfirmationDialogService,
    IS4Service,
    PermissionService
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
