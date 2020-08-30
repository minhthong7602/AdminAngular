import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../services/auth.service';
import { NbMenuItem } from '@nebular/theme';
import { IUser, IUserInfo } from '../interfaces/user';
import { ShareDataService } from '../services/share-data.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu: NbMenuItem[] = [];
  userInfo: IUserInfo;
  constructor(
    private authenService: AuthenService,
     private shareDataService: ShareDataService,
     private userService: UserService) {

  }

  ngOnInit(): void {
    this.updateMenu();
  }

  updateMenu() {
    this.menu = [
    {
        title: 'Thống kê',
        icon: 'inbox-outline',
        link: '/pages/dashboard'
    },
    {
      title: 'Danh sách bài viết',
      icon: 'inbox-outline',
      link: '/pages/inventory-order'
    },
    {
      title: 'Cài đặt',
      icon: 'settings-outline',
      // tslint:disable-next-line: radix
      hidden: !this.userService.isSuperAdmin(),
      children: [
        {
          title: 'Quản lý người dùng',
          link: '/pages/setting/users',
          icon: 'people-outline',
        },
        {
          title: 'Quản lý tag',
          link: '/pages/setting/warehouse',
          icon: 'cube-outline',
        },
      ],
    }];
  }
}
