// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  headTitle?: string;
  badgeType?: string;
  badgeValue?: string;
  children?: Menu[];
}

export const MENUITEMS: Menu[] = [
  {
    headTitle: 'Dashboard'
  },
  {
    path: '/dashboard/default', title: 'HOME', icon: 'icon-desktop', type: 'link'
  },
  {
    path: '/dashboard/default', title: 'Report', icon: 'icofont icofont-dashboard-web', type: 'link'
  },
  {
    headTitle: 'Quản lý danh mục'
  },
  {
    path: '/accountscategoris/accountingaccounts', title: 'Tài khoản kế toán', icon: 'fa fa-user-circle-o', type: 'link'
  },
  {
    path: '/accountscategoris/bankaccount', title: 'Tài khoản ngân hàng', icon: 'icon-home', type: 'link'
  },
  {
    path: '/accountscategoris/customergroupandsubpliers', title: 'Nhóm khách hàng/nhà cung cấp', icon: 'fa fa-users', type: 'link'
  },
  // {
  //   headTitle: 'Quản lý kho'
  // },
  // {
  //   path: '/warehouse/whinfo', title: 'Thông tin kho', icon: 'icon-home', type: 'link'
  // },
  // {
  //   path: '/warehouse/whemployee', title: 'Nhân viên kho', icon: 'icon-home', type: 'link'
  // }
];
