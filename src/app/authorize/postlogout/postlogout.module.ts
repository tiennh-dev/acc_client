import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostLogoutComponent } from './postlogout.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

const routes = [
    {
        path: '',
        component: PostLogoutComponent,
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

export class PostLogoutModule {
}
