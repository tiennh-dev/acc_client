import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// Components
import { ContentComponent } from './shared/layouts/content/content.component';

// Routes
import { content } from './shared/routes/content.routes';
import { AuthGuard } from './services/auth/auth.guard';
import { CallbackComponent } from './authorize/callback/callback.component';
import { PostLogoutComponent } from './authorize/postlogout/postlogout.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: ContentComponent,
    children: content,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
  ,
  {
    path: 'signout-callback-oidc',
    component: PostLogoutComponent
  }
];

@NgModule({
// tslint:disable-next-line: max-line-length
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, anchorScrolling: 'disabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
