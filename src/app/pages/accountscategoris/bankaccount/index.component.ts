import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, AfterViewInit, Input, Renderer, EventEmitter } from '@angular/core';
import { of, Subject, merge } from 'rxjs';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ErrorCodeDefine } from 'src/app/common/error-code-define';
// -----------------------
import * as model from '../../../models/model/bankaccount.model';
import { BankInfoService } from 'src/app/services/bankinfo.service';
import { UtilityService } from 'src/app/services/utility.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { PermissionService } from 'src/app/services/permission.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ConfigSetting, Actions, MenuContextDefine2, PermissionCommon } from 'src/app/common/config-setting';
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
    public Keyword = '';
    public search_bankAccount = '';
    public search_Owner = '';
    public search_bankName = '';
    public search_active = false;
    public activeList: any[] = [];
    public dataTable: any[];
    // Public
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    dtOptions: any = {};
    public bankType: any[];
    public pageLength: number;
    public keyword: string;
    constructor(
        private modalService: NgbModal,
        private ctService: BankAccountService,
        private utility: UtilityService,
        private permissionService: PermissionService,
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
            extend: 'print', text: '<span data-action-target="button" <i class="icofont icofont-print"></i> In', title: 'WalletTrans'
        });
        tblToolbar.push({
            extend: 'colvis', text: '<i class="icofont icofont-table"></i> Cột hiển thị',
            columnText: function (dt, idx, title) {
                return (idx + 1) + ' : ' + title;
            }
        });
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
            extend: 'excel', text: '<span data-action-target="button" ><i class="icofont icofont-file-excel"></i> Xuất Excel</span>',
            exportOptions: {
                modifier: {
                    page: 'current'
                }
            },
            title: 'Bank Account',
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
                { data: 'BankAccount', title: 'Số tài khoản' },
                {
                    data: 'BankName', title: 'Tên ngân hàng'
                },
                {
                    data: 'Branch', title: 'Chi nhánh'
                },
                { data: 'Province', title: 'Tỉnh/TP' },
                { data: 'Address', title: 'Địa chỉ chi nhánh' },
                { data: 'Owner', title: 'Chủ tài khoản' },
                { data: 'Note', title: 'Ghi chú' },
                {
                    data: 'Active', title: 'Ngừng theo dõi',
                    render: function (data: any, type: any, item: any) {
                        if (item.Active == "True") {
                            return ` <div class="checkbox" ><input type="checkbox"  id="checkbox-primary-'${item.Id}'" checked  data-items /><label for="checkbox-primary-'${item.Id}'"></label></div>`
                        } else {
                            return ` <div class="checkbox" ><input type="checkbox"  id="checkbox-primary-'${item.Id}'"  data-items /><label for="checkbox-primary-'${item.Id}'"></label></div>`
                        }
                    }
                },
            ],
            rowCallback: (row: Node, data: model.BankAccountJTable, index: number) => {
                const self = this;
                $(row).attr('id', 'bankacc_row_item' + data.Id);
                let menuItemDefines: MenuContextDefine2[] = [
                    { key: 'edit', name: 'Edit Bank', icon: 'fa-edit', permissionAction: Actions.ACCESS },
                    { key: 'delete', name: 'Delete item', icon: 'fa-recycle', permissionAction: Actions.ACCESS },
                ];
                let menuItems = PermissionCommon.createMenuItems(this.permissionService, menuItemDefines);
                $.contextMenu({
                    selector: '#' + 'bankacc_row_item' + data.Id,
                    build: function ($triggerElement, e) {
                        return {
                            callback: function (key, options) {
                                if (key === 'edit') {

                                }
                                if (key === 'active') {

                                }
                                if (key === 'delete') {
                                    self.confirmService.confirm('Thông báo', `Bạn có chắc chắn muốn xóa tài khoản ngân hàng {${data.BankAccount}} không ?`)
                                        .then((confirmed) =>
                                            confirmed ? self.onDelete(data.Id) : self.confirmService.close()
                                        ).catch(() =>
                                            self.confirmService.close(),
                                        );
                                }
                            },
                            items: {
                                "edit": { name: "Edit item", icon: "fa-edit" },
                                "delete": { name: "Delete item", icon: "fa-recycle" },
                                "sep1": "---------",
                                "quit": {
                                    name: "Quit", icon: function () {
                                        return 'context-menu-icon context-menu-icon-quit';
                                    }
                                }
                            }
                        };
                    }
                });

                return row;
            },
            buttons: tblToolbar
        };
    }

    onDelete(Id: number): void {
        this.ctService.deleteBankAccount(Id).subscribe(res => {
            if (!res.status) {
                this.utility.showError(res.errorCode, res.parameters);
                return;
            }

            this.utility.showMessage("Xóa ngân hàng thành công");
            this.rerender(false);
        })
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


