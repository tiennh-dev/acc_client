import { WarehouseService } from './../../../services/warehouse.service';
import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { of, merge } from 'rxjs';
import { NgbActiveModal, NgbDateParserFormatter, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, catchError, filter, startWith, map } from 'rxjs/operators';
import { ErrorCodeDefine } from 'src/app/common/error-code-define';
// -----------------------
import * as model from '../../../models/model/warehouse.model';
import * as modelreq from '../../../models/request/warehousesort.request';
import { UtilityService } from 'src/app/services/utility.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { WareHouseListRequestextends } from '../../../models/request/warehousesort.request';
import { PagingConfig } from 'src/app/models/model/base.model';

@Component({
    selector: 'app-warehouse-sort',
    templateUrl: './sortwarehouse.component.html'
})

export class SortComponent implements OnInit {
    @BlockUI('blockui-popup') blockUI: NgBlockUI;
    private pagingConfig: PagingConfig;
    public dataWareHouse: any;
    public arrOrder: model.WareHouseOrder[] = [];
    private refresh: EventEmitter<any> = new EventEmitter<any>();

    constructor(private ctService: WarehouseService,
        private utility: UtilityService,
        public activeModal: NgbActiveModal,  configModal: NgbModalConfig, ) {
            this.pagingConfig = {
                collectionSize: 0,
                maxSize: 5,
                pageIndex: 1,
                pageSize: 100000
            };
            this.arrOrder=[];
         }

    ngOnInit() {
        merge(this.refresh)
        .pipe(
            startWith({}),
            switchMap(() => {
                const request: WareHouseListRequestextends = {
                    pageIndex: this.pagingConfig.pageIndex,
                    pageSize: this.pagingConfig.pageSize,
                    sortBy: '',
                    sortDirection: '',
                    sorts: [{ sortBy: 'Order', sortDirection: 'ASC' }],
                    keyword: null
                };
                this.utility.showProcessing(this.blockUI);
                return this.ctService.getList(request);
            }),
            map(response => {
                // Flip flag to show that loading has finished.
                this.utility.cancelProcessing(this.blockUI);
                if (!response.status) {
                    // TODO: show error.
                    this.utility.showError(response.errorCode,
                        response.parameters);
                }
                return response;
            }),
            catchError(() => {
                this.utility.cancelProcessing(this.blockUI);
                // TODO: show error.
                this.utility.showError(ErrorCodeDefine.UNKNOW_ERROR,
                    null);

                return of(model.WarehouseList[0]);
            })
        ).subscribe(res => {
            this.dataWareHouse = res.data;
        });       
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.dataWareHouse, event.previousIndex, event.currentIndex);
    }

    onSortOrder(): void {
        this.arrOrder = [];
        this.utility.showProcessing(this.blockUI);
        this.dataWareHouse.map(function (item, i) {
            const ii = i + 1;
            return {
                Id: item.id,
                order: ii
            };
        }).forEach(item => this.arrOrder.push(item));
        this.ctService.updateSortOrder(this.arrOrder)
            .subscribe(response => {
                if (!response.status) {
                    this.utility.showError(response.errorCode,
                        response.parameters);
                    return;
                }
                this.utility.cancelProcessing(this.blockUI);
                // TODO: Get message from i18n
                this.utility.showMessage(`Sort updated successful`);
                // this.refresh.emit();
               this.activeModal.close('');
                
            });
    }
}