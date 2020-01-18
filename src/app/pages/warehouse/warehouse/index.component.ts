import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, AfterViewInit, Input, Renderer, EventEmitter } from '@angular/core';
import { of, Subject, merge } from 'rxjs';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ErrorCodeDefine } from 'src/app/common/error-code-define';
// -----------------------
import * as model from '../../../models/model/warehouse.model';
import { UtilityService } from 'src/app/services/utility.service';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { AddComponent } from './add.component';
import { EditComponent } from './edit.component';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { SortComponent } from './sortwarehouse.Component';
import { Actions, MenuContextDefine2, PermissionCommon } from 'src/app/common/config-setting';
import { PermissionService } from 'src/app/services/permission.service';
@Component({
  selector: 'app-warehouse',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal]
})
export class IndexComponent implements AfterViewInit, OnDestroy, OnInit {
  @BlockUI('blockui') blockUI: NgBlockUI;
  public dtTrigger: Subject<any> = new Subject();

  // Public
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: any = {};
  public data: model.WarehouseListJTable[];
  public pageLength: number;

  constructor(
    private modalService: NgbModal,
    private ctService: WarehouseService,
    private utility: UtilityService,
    private confirmService: ConfirmationDialogService,
    private permissionService: PermissionService
  ) {
    this.permissionService.ResourceKey="WAREHOUSE";
    this.pageLength = 30;
  }

  ngOnInit() {
    let tblToolbar = [];
    tblToolbar.push({
      text: '<span data-action-target="button" data-action=' + Actions.ACCESS + '><i  class="icofont icofont-ui-add"></i> Thêm mới</span>',
          key: 'a', shiftKey: true,
          action: (e, dt, node, config) => {
            const modalRef = this.modalService.open(AddComponent, { size: 'lg' });
            modalRef.result.then((result) => {
              this.rerender(false);
            }, (reason) => {
            });
          }
    });
    tblToolbar.push({
      extend: 'print', text: '<i class="icofont icofont-print"></i> In', title: 'Purchase waiting'
    });
    tblToolbar.push({
      extend: 'excel', text: '<span data-action-target="button" data-action=' + Actions.EXPORT + '><i class="icofont icofont-file-excel"></i> Xuất Excel</span>',
      exportOptions: {
        modifier: {
          page: 'current'
        }
      },
      title: 'Warehouse Info',
    });
    tblToolbar.push({
      extend: 'colvis', text: '<span data-action-target="button" data-action=' + Actions.ACCESS + '><i class="icofont icofont-table"></i> Cột hiển thị</span>',
      columnText: function (dt, idx, title) {
        return (idx + 1) + ' : ' + title;
      }
    });
    tblToolbar.push({
      text: '<span data-action-target="button" data-action=' + Actions.ACCESS + '><i  class="icofont icofont-sort-alt"></i> Sort</span>',
      key: 'a', shiftKey: true,
      action: (e, dt, node, config) => {
        const modalRef = this.modalService.open(SortComponent);
        modalRef.componentInstance.itemId = null;
        modalRef.componentInstance.title = 'Sort';
        modalRef.result.then((result) => {
          this.rerender(false);
        }, (reason) => {
        });
      }
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: this.pageLength,
      serverSide: true,
      processing: true,
      order: [7, 'asc'],
      ajax: (tblSearch: any, callback) => {
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
        { data: 'Id', title: 'Id' },
        {
          data: 'Code', title: 'Code'
        },
        {
          data: 'YACode', title: 'YACode',visible: false,
        },
        { data: 'Name', title: 'Tên kho',orderable: false },
        { data: 'Address', title: 'Địa chỉ',orderable: false },
        { data: 'Description', title: 'Mô tả',orderable: false },
        {
          data: 'Status', title: 'Trạng thái',
          render: function (data: any, type: any, item: any) {
            if (data == 0) {
              return `<span class="badge badge-warning">Dừng hoạt động</span>`;
            } else {
              return `<span class="badge badge-success">Đang hoạt động</span>`;
            }
          }
        },
        {data:'Order',title:'Order'}
      ],
      rowCallback: (row: Node, data: model.WarehouseListJTable, index: number) => {
        const self = this;
        $(row).attr('id', 'warehouse_row_item' + data.Id);
        let menuItemDefines: MenuContextDefine2[] = [
          { key: 'edit',  name: 'Edit', icon: 'fa-edit', permissionAction: Actions.EDIT },
          { key: 'delete',  name: 'Delete', icon: 'fa-recycle' , permissionAction: Actions.ACCESS },
          { key: 'active', name: 'Active', icon: 'fa-toggle-on', permissionAction: Actions.ACCESS },
        ];  
        let menuItems = PermissionCommon.createMenuItems(this.permissionService, menuItemDefines); 
        $.contextMenu({
          selector: '#' + 'warehouse_row_item' + data.Id,
          build: function ($triggerElement, e) {
            return {
              callback: function (key, options) {
                if (key === 'edit') {
                  const modalRef = self.modalService.open(EditComponent, { size: 'lg' });
                  modalRef.componentInstance.itemId = data.Id;
                  modalRef.result.then((result) => {
                    self.rerender(false);
                  }, (reason) => {
                  });
                }

                if (key === 'delete') {
                  self.confirmService.confirm('Are you sure?', 'Do you really want to delete it ... ?')
                    .then((confirmed) =>
                      confirmed ? self.onDelete(data.Id) : self.confirmService.close()
                    ).catch(() =>
                      self.confirmService.close(),
                    );
                }

                if (key === 'active') {
                  self.confirmService.confirm('Are you sure?', 'Do you really want to active it ?')
                    .then((confirmed) =>
                      confirmed ? self.onActive(data.Id) : self.confirmService.close()
                    ).catch(() =>
                      self.confirmService.close(),
                    );
                }
              },
              items: {
                menuItems,
                'sep1': '---------',
                'quit': {
                  name: 'Quit', icon: function () {
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

  onDelete(itemId: number): void {
    if (itemId === undefined) {
      this.utility.showError(ErrorCodeDefine.OBJECT_NULL);
    }
    if (itemId <= 0) {
      this.utility.showError(ErrorCodeDefine.ID_MUST_GT_0);
      return;
    }
    this.utility.showProcessing(this.blockUI);
    this.ctService.delete(itemId)
      .subscribe(response => {
        if (!response.status) {
          this.utility.showError(response.errorCode,
            response.parameters);
          return;
        }
        this.utility.cancelProcessing(this.blockUI);
        this.utility.showMessage(`Warehouse ${itemId} deleted`);
        this.rerender(false);
      });
  }
  onActive(itemId: number): void {
    if (itemId === undefined) {
      this.utility.showError(ErrorCodeDefine.OBJECT_NULL);
    }
    if (itemId <= 0) {
      this.utility.showError(ErrorCodeDefine.ID_MUST_GT_0);
      return;
    }
    this.utility.showProcessing(this.blockUI);
    this.ctService.changeStatus(itemId)
      .subscribe(response => {
        if (!response.status) {
          this.utility.showError(response.errorCode,
            response.parameters);
          return;
        }
        this.utility.cancelProcessing(this.blockUI);
        this.utility.showMessage(`Warehouse ${itemId} active`);
        this.rerender(false);
      });
  }
  // #region --Render datatable callback--
  // rerender(): void {
  //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.destroy();
  //     this.dtTrigger.next();

  //   });
  // }

  rerender(reset: boolean): void {
    this.dtElement.dtInstance.then(x => x.draw(reset));
  }
  // #endregion
  // filterWarehouse(): void {
  //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.destroy();
  //     this.dtTrigger.next();

  //   });
  // }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}


