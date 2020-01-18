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

export class IndexComponent implements OnInit {
  @BlockUI('blockui') blockUI: NgBlockUI;
  @ViewChild('treeGridReference') treeGrid: jqxTreeGridComponent;
  public search_no = '';
  public search_name = '';
  public search_Type = '';
  public search_refType = '';
  public listType: any[] = [];
  public statusActive: any[] = [];
  ngOnInit() { }
 
  source: any =
    {
        dataType: "csv",
        dataFields: [
            { name: 'EmployeeKey', type: 'number' },
            { name: 'FirstName', type: 'string' },
            { name: 'LastName', type: 'string' },
            { name: 'Title', type: 'string' },
            { name: 'DepartmentName', type: 'string' }
        ],
        hierarchy:
        {
            keyDataField: { name: 'EmployeeKey' },
            parentDataField: { name: 'ParentEmployeeKey' }
        },
        id: 'EmployeeKey',
        url: '../../demos/sampledata/employeesadv.csv'
    }
 
    dataAdapter: any = new jqx.dataAdapter(this.source);
 
    columns: any[] =
    [
        { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
        { text: 'LastName', dataField: 'LastName', width: 200 },
        { text: 'Department Name', dataField: 'DepartmentName', width: 150 },
        { text: 'Title', dataField: 'Title', width: 300 }
    ];   
}
