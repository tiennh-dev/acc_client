import { WarehouseEmpService } from './../../../services/warehouse-emp.service';
import { Component, OnInit, AfterViewInit, EventEmitter, ViewChild, OnDestroy, Input, Renderer } from '@angular/core';
import { of, merge, Subject } from 'rxjs';
import { switchMap, catchError, filter, startWith, map } from 'rxjs/operators';
import { ErrorCodeDefine } from 'src/app/common/error-code-define';
// -----------------------
import * as model from '../../../models/model/warehouse-emp.model';
import { UtilityService } from 'src/app/services/utility.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DataTableDirective } from 'angular-datatables';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent implements AfterViewInit, OnInit, OnDestroy {
    @BlockUI('blockui') blockUI: NgBlockUI;
    public dtTrigger: Subject<any> = new Subject();
    @Input() itemId: any;
    // Public
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    dtOptions: any = {};
    public data: model.Employee[];
    public pageLength: number;
    public usernameEmp = '';
    public emailEmp = '';
    public phoneEmp = '';

    constructor(
        private ctService: WarehouseEmpService,
        private utility: UtilityService,
        public activeModal: NgbActiveModal
    ) {
        this.pageLength = 10;
    }

    ngOnInit() {

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: this.pageLength,
            serverSide: true,
            processing: true,
            order: [0, 'desc'],
            ajax: (tblSearch: any, callback) => {
                tblSearch.warehouseId = this.itemId;
                tblSearch.username = this.usernameEmp;
                tblSearch.email = this.emailEmp;
                tblSearch.phone = this.phoneEmp;
                this.ctService.getListEmployee(tblSearch)
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
                { data: 'Id', title: 'Id', visible: false, orderable: false },
                {
                    data: 'FullName', title: 'Tên nhân viên', orderable: false
                },
                { data: 'UserName', title: 'Tên tài khoản', orderable: false },
                { data: 'Email', title: 'Email', orderable: false },
                { data: 'PhoneNumber', title: 'Số điện thoại', orderable: false },
                {
                    title: '',
                    render: function (data: any, type: any, item: any) {
                        return '<button class="btn btn-primary add"' + item.Id + '>Thêm</button>';
                    },
                    orderable: false
                }
            ],
            buttons: [
                {
                    extend: 'print', text: '<i class="icofont icofont-print"></i> In', title: 'Warehouse Info'
                },
                {
                    extend: 'excel', text: '<i class="icofont icofont-file-excel"></i> Xuất Excel',
                    exportOptions: {
                        modifier: {
                            page: 'current'
                        }
                    },
                    title: 'Warehouse Info',
                },
                {
                    extend: 'colvis', text: '<i class="icofont icofont-table"></i> Cột hiển thị',
                    columnText: function (dt, idx, title) {
                        return (idx + 1) + ' : ' + title;
                    }
                },
            ],
            rowCallback: (row: Node, data: model.Employee, index: number) => {
                const self = this;
                $(row).attr('id', 'warehouse_emp_row_' + data.Id);
                // tslint:disable-next-line: deprecation
                $('td .add', row).unbind('click');
                // tslint:disable-next-line: deprecation
                $('td .add', row).bind('click', () => {
                    self.addEmp(data.Id);
                });
                return row;
            },
        };
    }
    addEmp(id: string) {
        if (id === undefined) {
            this.utility.showError(ErrorCodeDefine.OBJECT_NULL);
        }
        this.utility.showProcessing(this.blockUI);
        this.ctService.add(this.itemId, id)
            .subscribe(response => {
                if (!response.status) {
                    this.utility.showError(response.errorCode,
                        response.parameters);
                    return;
                }
                this.utility.cancelProcessing(this.blockUI);
                this.rerender();
                this.utility.showMessage(`Thêm nhân viên thành công`);
            });
    }
    rerender(): void {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
        });
    }
    ngAfterViewInit(): void {
        this.dtTrigger.next();
    }
    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }
}


