import { Component, OnInit } from '@angular/core';
import { MENUITEMS, Menu } from './sidebar-items';
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from 'jquery';
import { IS4Service } from 'src/app/services/is4.service';
import { Resource } from 'src/app/models/model/is4.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: Menu[];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private is4Service: IS4Service) {
  }

  ngOnInit() {
    $.getScript('./assets/js/sidebar-menu.js');

    this.is4Service.accessGetResources().subscribe(response => {
      if(!response.status) {
        return;
      }
      
      //this.menuItems = this.createMenu(response.data);
    });

    this.menuItems = MENUITEMS.filter(menuItem => menuItem);
  }

  private createMenu(resources: Resource[], parentId: number | null = null): Menu[] {
    const resourceByParentIds = resources.filter(item => item.parentId === parentId);

    if(resourceByParentIds.length == 0) {
      return [];
    }
    const menuItems: Menu[] = [];
    resourceByParentIds.sort((left, right) => {
      if(!left.ord) {
        return -1;
      }

      if(!right.ord) {
        return 1;
      }

      if(left.ord > right.ord) { 
        return 1; 
      } 
      
      if(left.ord < right.ord) {
        return -1;
      }
      
      return 0; 
    }).map(item => {
      const menu: Menu = {
        type: item.type,
        icon: item.icon,
        title: item.title,
        path: item.url
      };
      let menuItems2: Menu[] = [menu];
      const childrens = this.createMenu(resources, item.id);

      if(item.type === 'head') {
        menu.headTitle = item.title;

        menuItems2 = menuItems2.concat(childrens);
      } else if(childrens.length > 0) {
        menu.type = 'sub';
        menu.children = childrens;
      }

      return menuItems2;
    }).forEach(item => item.forEach(item2 => menuItems.push(item2)));
    
    return menuItems;
  }
}
