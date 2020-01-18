import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CallbackComponent } from './callback.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

const routes = [
    {
        path: '',
        component: CallbackComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        HttpClientModule,
        OAuthModule.forRoot(),
        RouterModule.forChild(routes)
    ]
})

export class CallbackModule {
}
