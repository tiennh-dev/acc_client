import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, AfterViewInit, Input, Renderer, EventEmitter } from '@angular/core';
import { of, Subject, merge } from 'rxjs';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ErrorCodeDefine } from 'src/app/common/error-code-define';
// -----------------------
import * as model from '../../../models/model/bankinfo.model';
import { BankInfoService } from 'src/app/services/bankinfo.service';
import { UtilityService } from 'src/app/services/utility.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ConfigSetting, Actions, MenuContextDefine2, PermissionCommon } from 'src/app/common/config-setting';
import { PermissionService } from 'src/app/services/permission.service';
import { BankAccountService } from 'src/app/services/bankaccount.service';
import { AddbankAccountComponent } from './addbankaccount.component';

@Component({
    selector: 'app-bankname',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [NgbModalConfig, NgbModal]
})
export class IndexComponent implements AfterViewInit, OnDestroy, OnInit {
    @BlockUI('blockui') blockUI: NgBlockUI;
    public dtTrigger: Subject<any> = new Subject();
    public Keyword='';
    public search_bankAccount = '';
    public search_Owner = '';
    public search_bankName = '';
    public search_active =false;
    public activeList: any[] = [];
    public dataTable:any[];
    // Public
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    dtOptions: any = {};
    public data: model.BankInfoListJTable[];
    public bankType: any[];
    public pageLength: number;
    public keyword: string;
    constructor(
        private modalService: NgbModal,
        private ctService: BankAccountService,
        private utility: UtilityService,
        private confirmService: ConfirmationDialogService,
    ) {
        this.pageLength = 30;
        this.keyword = '';
        this.activeList = [
            { status: true, display: 'Ngừng theo dõi' },
            { status: false, display: 'Theo dõi' },
        ]
    }

    ngOnInit() {
        let tblToolbar = [];
        tblToolbar.push({
            text: '<span data-action-target="button"><i  class="icofont icofont-ui-add"></i> Thêm mới</span>',
            key: 'a', shiftKey: true,
            action: (e, dt, node, config) => {
                const modalRef = this.modalService.open(AddbankAccountComponent);
                modalRef.result.then((result) => {
                    this.rerender(false);
                }, (reason) => {
                });
            }
        });
        tblToolbar.push({
            extend: 'print', text: '<span data-action-target="button" <i class="icofont icofont-print"></i> In', title: 'WalletTrans'
        });
        tblToolbar.push({
            extend: 'excel', text: '<span data-action-target="button" ><i class="icofont icofont-file-excel"></i> Xuất Excel</span>',
            exportOptions: {
                modifier: {
                    page: 'current'
                }
            },
            title: 'Bank Deposit',
        });
        tblToolbar.push({
            extend: 'colvis', text: '<i class="icofont icofont-table"></i> Cột hiển thị',
            columnText: function (dt, idx, title) {
                return (idx + 1) + ' : ' + title;
            }
        });
        this.dtOptions = {
            language: {
                'sLengthMenu': 'Xem_MENU_Mục ',
              },
              pagingType: 'full_numbers',
              pageLength: this.pageLength,
              serverSide: true,
              processing: true,
              searching: false,
            ajax: (tblSearch: any, callback) => {
                tblSearch.keyword = this.keyword;
                tblSearch.bankAccount = this.search_bankAccount;
                tblSearch.Owner = this.search_Owner;
                tblSearch.BankName = this.search_bankName;
                tblSearch.Active = this.search_active;
                this.ctService.getListJTable(tblSearch)
                    .subscribe(response => {
                        callback({
                            recordsTotal: response.recordsTotal,
                            recordsFiltered: response.recordsFiltered,
                            draw: response.draw,
                            data: response.data
                        });
                    }, () => { });
            },
            dom: 'Bfrtip', select: true,
            columns: [
                { data: 'BankAccount', title: 'Số tài khoản'},
                {
                    data: 'BankName', title: 'Tên ngân hàng'
                },
                {
                    data: 'Branch', title: 'Chi nhánh'
                },
                { data: 'Province', title: 'Tỉnh/TP' },
                { data: 'Address', title: 'Địa chỉ chi nhánh'},
                { data: 'Owner', title: 'Chủ tài khoản'},
                { data: 'Note', title: 'Ghi chú' },
                { data: 'Active', title: 'Ngừng theo dõi', 
                render: function (data: any, type: any, item: any) {
                      if (item.Active == "True") {
                        return ` <div class="checkbox" ><input type="checkbox"  id="checkbox-primary-'${item.Id}'" checked  data-items /><label for="checkbox-primary-'${item.Id}'"></label></div>`
                      } else {
                        return ` <div class="checkbox" ><input type="checkbox"  id="checkbox-primary-'${item.Id}'"  data-items /><label for="checkbox-primary-'${item.Id}'"></label></div>`
                      }
                  }
                 },
            ],
            rowCallback: (row: Node, data: model.BankInfoListJTable, index: number) => {
                const self = this;
                $(row).attr('id', 'bankinfo_row_item' + data.Id);
                let menuItemDefines: MenuContextDefine2[] = [
                    { key: 'edit', name: 'Edit Bank', icon: 'fa-edit', permissionAction: Actions.EDIT },
                    { key: 'active', name: 'Active', icon: 'fa-toggle-on', permissionAction: Actions.ACTIVE },
                    { key: 'delete', name: 'Delete item', icon: 'fa-recycle', permissionAction: Actions.DELETE },
                ];
                //let menuItems = PermissionCommon.createMenuItems(this.permissionService, menuItemDefines);
                $.contextMenu({
                    selector: '#' + 'bankinfo_row_item' + data.Id,
                    build: function ($triggerElement, e) {
                        return {
                            callback: function (key, options) {
                                if (key === 'edit') {

                                }
                                if (key === 'active') {
                                    
                                }
                                if (key === 'delete') {
                                   
                                }
                            },
                            //items: menuItems,
                            'sep1': '---------',
                            'quit': {
                                name: 'Quit', icon: function () {
                                    return 'context-menu-icon context-menu-icon-quit';
                                }
                            }
                        };
                    }
                });
                $('[data-changebankType]', row).each((index, item) => {
                    const $this = $(item);
                    const selectedCode = $this.data('code');
                    const html = this.generateBankTypeElement(selectedCode);

                    $this.parent().html(html);
                });
             
                return row;
            },
            buttons: tblToolbar
        };
    }
 
 


    generateBankTypeElement(productoriginCode: string): string {
        const startHtml = '<select data-changebankType class="select-custom"><option>Chọn</option>';
        const endHtml = '</select>';
        const optionHtml = this.bankType.map(item => {
            let code = productoriginCode.toString();
            const selected = item.id === code ? 'selected = "selected"' : '';
            const option = `<option value="${item.id}"  ${selected}>${item.name}</option>`;

            return option;
        });
        const html = [startHtml, ...optionHtml, endHtml].reduce((accumulator: string, currentValue: string, currentIndex, array) => {
            return accumulator + currentValue;
        }, '');

        return html.toString();
    }


    // #region --Render datatable callback--
    rerender(reset: boolean): void {
        this.dtElement.dtInstance.then(x => x.draw(reset));
      }
    ngAfterViewInit(): void {
        this.dtTrigger.next();
    }
    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

}


