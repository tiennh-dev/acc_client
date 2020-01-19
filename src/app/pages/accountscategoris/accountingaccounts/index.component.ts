import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
import { of, Subject, merge } from 'rxjs';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
// -----------------------
import * as model from '../../../models/model/order.model';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerListResponse } from 'src/app/models/response/customer.response';
import * as modelCus from '../../../models/model/customer.model';
import { PaymentList } from '../../../models/model/order.model';
import { switchMap, startWith, map, catchError } from 'rxjs/operators';
import { UtilityService } from 'src/app/services/utility.service';
import { ErrorCodeDefine } from 'src/app/common/error-code-define';
import { ApprovalOrderService } from 'src/app/services/approval.order.service';
import * as req_cus_model from '../../../models/request/customer.request';
import { jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
import { OrderState, OrderStatus, OrderRefType, Actions, MenuContextDefine2, PermissionCommon } from 'src/app/common/config-setting';
import { AccountingAccountsService } from 'src/app/services/accountingaccounts.service';
import { AccountingAccountJTable } from 'src/app/models/model/accountingaccounts.model';


@Component({
    selector: 'app-accounting-account',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [NgbModalConfig, NgbModal],
})

export class IndexComponent implements OnInit {
    @ViewChild('TreeGrid') treeGrid: jqxTreeGridComponent;
    public Keyword='';
    public search_no = '';
    public search_name = '';
    public search_type = '';
    public search_active = '';
    public typeList: any[] = [];
    public activeList: any[] = [];
    public dataTable:any[];
    constructor(
        private modalService: NgbModal,
        private utility: UtilityService,
        private ctService: AccountingAccountsService,

    ) {

    }

    ngOnInit() {
        merge( )
        .pipe(
          startWith({}),
          switchMap(() => {
            var request:any={
                Name : this.search_name,
                Type:this.search_type,
                Acctive:this.search_active
            };
           return this.ctService.getListJTable(request);
          }),
          map(response => {
            if (!response.status) {
              this.utility.showError(response.errorCode,
                response.parameters);
            }
            return response;
          }),
          catchError(() => {
            this.utility.showError(ErrorCodeDefine.UNKNOW_ERROR, null);
            return of(null);
          })
        ).subscribe(res => {
          this.dataTable = res.data;
          console.log(this.dataTable);
        });
    }

    getWidth(): any {
        return '100%';
    }
    data: any[] = [
        {
            'id': '1', 'name': 'Corporate Headquarters', 'budget': '1230000', 'location': 'Las Vegas',
            'children':
                [
                    {
                        'id': '2', 'name': 'Finance Division', 'budget': '423000', 'location': 'San Antonio',
                        'children':
                            [
                                { 'id': '3', 'name': 'Accounting Department', 'budget': '113000', 'location': 'San Antonio' },
                                {
                                    'id': '4', 'name': 'Investment Department', 'budget': '310000', 'location': 'San Antonio',
                                    'children':
                                        [
                                            { 'id': '5', 'name': 'Banking Office', 'budget': '240000', 'location': 'San Antonio' },
                                            { 'id': '6', 'name': 'Bonds Office', 'budget': '70000', 'location': 'San Antonio' },
                                        ]
                                }
                            ]
                    },
                    {
                        'id': '7', 'name': 'Operations Division', 'budget': '600000', 'location': 'Miami',
                        'children':
                            [
                                { 'id': '8', 'name': 'Manufacturing Department', 'budget': '300000', 'location': 'Miami' },
                                { 'id': '9', 'name': 'Public Relations Department', 'budget': '200000', 'location': 'Miami' },
                                { 'id': '10', 'name': 'Sales Department', 'budget': '100000', 'location': 'Miami' }
                            ]
                    },
                    { 'id': '11', 'name': 'Research Division', 'budget': '200000', 'location': 'Boston' }
                ]
        }
    ];
    source: any =
        {
            dataType: 'json',
            dataFields: [
                { name: 'no', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'typeDisplay', type: 'string' },
                { name: 'subChildren', type: 'array' },
                { name: 'note', type: 'string' },
                { name: 'active', type: 'boolean' }
            ],
            hierarchy:
            {
                root: 'subChildren'
            },
            localData: this.dataTable,
            id: 'no'
        };
    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'Số tài khoản', dataField: 'no', width: 150 },
        {
            text: 'Tên tài khoản', dataField: 'name', width: 270
        },
        {
            text: 'Tính chất', dataField: 'typeDisplay'
        },
        {
            text: 'Ghi chú', align: 'right', cellsAlign: 'right', cellClassName: 'conditionalFormatting', cellsFormat: 'c2', dataField: 'note', width: 200
        }
    ];
    ready(): void {
        this.treeGrid.expandRow(1);
        this.treeGrid.expandRow(2);
        this.treeGrid.expandRow(7);
    }
}
