import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, AfterViewInit, Input, EventEmitter } from '@angular/core';
import { of, Subject, merge } from 'rxjs';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { ErrorCodeDefine } from 'src/app/common/error-code-define';
// -----------------------
import * as model from '../../../models/model/warehouse-emp.model';
import * as modelwh from '../../../models/model/warehouse.model';
import { WarehouseEmpService } from 'src/app/services/warehouse-emp.service';
import { UtilityService } from 'src/app/services/utility.service';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { EmployeeComponent } from './employee.component';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Actions } from 'src/app/common/config-setting';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'warehouse-emp',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal]
})
export class IndexComponent implements AfterViewInit, OnDestroy, OnInit {
  @BlockUI('blockui') blockUI: NgBlockUI;
  public dtTrigger: Subject<any> = new Subject();
  private refresh: EventEmitter<any> = new EventEmitter<any>();
  // Public
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: any = {};
  public data: model.WarehouseEmpList[];
  public pageLength: number;
  public lstWh: modelwh.WarehouseList[];
  public id: number;
  public check: false;
  constructor(
    private ctService: WarehouseEmpService,
    private utility: UtilityService,
    private modalService: NgbModal,
    private permissionService: PermissionService
  ) {
    this.permissionService.ResourceKey="WAREHOUSEEMP";
    this.pageLength = 30;
  }

  ngOnInit() {
    let tblToolbar = [];
    tblToolbar.push({
      extend: 'print', text: '<span data-action-target="button" data-action=' + Actions.ACCESS + '><i class="icofont icofont-print"></i> In</span>', title: 'Warehouse Employee'
    });
    tblToolbar.push({
      extend: 'excel', text: '<span data-action-target="button" data-action=' + Actions.EXPORT + '><i class="icofont icofont-file-excel"></i> Xuất Excel</span>',
      exportOptions: {
        modifier: {
          page: 'current'
        }
      },
      title: 'Warehouse Employee',
    });
    tblToolbar.push({
      extend: 'colvis', text: '<span data-action-target="button" data-action=' + Actions.ACCESS + '><i class="icofont icofont-table"></i> Cột hiển thị</span>',
      columnText: function (dt, idx, title) {
        return (idx + 1) + ' : ' + title;
      }
    });
    this.loadListWarehouse();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: this.pageLength,
      serverSide: true,
      processing: true,
      orderable: false,
      ajax: (tblSearch: any, callback) => {
        tblSearch.warehouseId = this.id == null ? 0 : this.id;
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
        { data: 'WarehouseId', title: 'Mã kho', orderable: false },
        { data: 'AccountId', title: 'AccountId', visible: false, orderable: false },
        { data: 'FullName', title: 'Tên nhân viên', orderable: false },
        { data: 'UserName', title: 'Tài khoản', orderable: false },
        { data: 'Email', title: 'Email', orderable: false },
        { data: 'PhoneNumber', title: 'Số điện thoại', orderable: false },
        {
          title: '',
          render: function (data: any, type: any, item: any) {
            return '<button class="btn btn-primary delete" data-action='+ Actions.DELETE + '>Xóa</button>';
          },
          orderable: false
        }
      ],
      rowCallback: (row: Node, data: model.WarehouseEmpList, index: number) => {
        const self = this;
        $(row).attr('id', 'warehouse_emp_row_' + data.Id);
        // tslint:disable-next-line: deprecation
        $('td .delete', row).unbind('click');
        // tslint:disable-next-line: deprecation
        $('td .delete', row).bind('click', () => {
          self.deleteEmp(data.WarehouseId);
        });
        return row;
      },
      buttons: tblToolbar
    };
  }
  deleteEmp(warehouseId: number) {
    if (warehouseId === undefined) {
      this.utility.showError(ErrorCodeDefine.OBJECT_NULL);
    }
    this.utility.showProcessing(this.blockUI);
    this.ctService.delete(warehouseId)
      .subscribe(response => {
        if (!response.status) {
          this.utility.showError(response.errorCode,
            response.parameters);
          return;
        }
        this.utility.cancelProcessing(this.blockUI);
        this.rerender();
        this.utility.showMessage(`Xóa nhân viên thành công`);
      });
  }
  loadListWarehouse(): void {
    merge(this.refresh)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.ctService.getListWarehouse();
        }),
        map(response => {
          if (!response.status) {
            // TODO: show error.
            this.utility.showError(response.errorCode,
              response.parameters);
          }
          return response;
        }),
        catchError(() => {
          // TODO: show error.
          this.utility.showError(ErrorCodeDefine.UNKNOW_ERROR,
            null);

          return of(modelwh.WarehouseList[0]);
        })
      ).subscribe(res => {
        if (res !== undefined) {
          this.lstWh = res.data.map((i) => {
            i.fName = i.name + ' (' + i.code + ')';
            return i;
          });
        }
      });
  }
  addEmp() {
    if (this.id === undefined || this.id == null) {
      this.utility.showError('Chưa chọn kho');
    } else {
      const modalRef = this.modalService.open(EmployeeComponent, { size: 'lg' });
      modalRef.componentInstance.itemId = this.id;
      modalRef.result.then((result) => {
        this.rerender();
      }, (reason) => {
        this.rerender();
      });
    }
  }
  // #region --Render datatable callback--
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
  // #endregion

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}


