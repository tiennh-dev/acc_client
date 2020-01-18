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


@Component({
  selector: 'app-accounting-account',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbModalConfig, NgbModal],
})

export class IndexComponent {
    @ViewChild('TreeGrid') treeGrid: jqxTreeGridComponent
    
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
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
            { name: 'name', type: 'string' },
            { name: 'budget', type: 'number' },
            { name: 'id', type: 'number' },
            { name: 'children', type: 'array' },
            { name: 'location', type: 'string' }
        ],
        hierarchy:
        {
            root: 'children'
        },
        localData: this.data,
        id: 'id'
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
    
    cellsRendererFunction(row, dataField, cellValueInternal, rowData, cellText): string {
        let cellValue = rowData[dataField];
        if (cellValue < 400000) {
            return "<span style='color: #e91b1b;'>" + cellText + "</span><span class='red-arrow-down'></span>";
        }
        return "<span style='color: #028b2b;'>" + cellText + "</span><span class='green-arrow-up'></span>";
    }
    columns: any[] = [
        { text: 'ID', dataField: 'id', width: 150 },
        {
            text: 'Name', dataField: 'name', width: 270
        },
        {
            text: 'Location', dataField: 'location'
        },
        {
            text: 'Budget', align: 'right', cellsRenderer: this.cellsRendererFunction, cellsAlign: 'right', cellClassName: 'conditionalFormatting', cellsFormat: 'c2', dataField: 'budget', width: 200
        }
    ];
    ready(): void {
        this.treeGrid.expandRow(1);
        this.treeGrid.expandRow(2);
        this.treeGrid.expandRow(7);
    }
}
