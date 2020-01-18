import { Component, OnInit } from '@angular/core';
import { ConfigSetting } from 'src/app/common/config-setting';
import { OAuthService } from 'angular-oauth2-oidc';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public name:string;
  constructor(private oauthService: OAuthService) {
    this.name=oauthService.getIdentityClaims()["name"];
    console.log(oauthService.getIdentityClaims());
  }

  ngOnInit() {
    $.getScript('assets/js/script.js');
  }
  editProfile() {
     
  }
  onLogout() {
    this.oauthService.logOut();
  }
}
