import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, catchError, filter } from 'rxjs/operators';
import { ErrorCodeDefine } from 'src/app/common/error-code-define';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
// -----------------------
import { ConfigSetting } from 'src/app/common/config-setting';
import * as model from '../../../models/model/bankaccount.model';
import { UtilityService } from 'src/app/services/utility.service';
import { BankAccountService } from 'src/app/services/bankaccount.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
const URL = ConfigSetting.IMAGE_UPLOAD;

@Component({
    selector: 'app-bankaccount-add',
    templateUrl: './addbankaccount.component.html'
})

export class AddbankAccountComponent implements AfterViewInit, OnInit {
    @BlockUI('blockui') blockUI: NgBlockUI;
    public myform: FormGroup;
    private dataModel: model.BankAccountJTable;
    get f() { return this.myform.controls; }
    submitted = false;
    public checkedActive:boolean;
    public listBankName: any[];

    constructor(private ctService: BankAccountService,
        private utility: UtilityService,
        public activeModal: NgbActiveModal,
        private _formBuilder: FormBuilder,
    ) {
        this.listBankName=[
            {id:'MSB',name:'MSB'},
            {id:'VIETCOMBANK',name:'VIETCOMBANK'},
            {id:'PHUONGDONG',name:'PHUONGDONG'},
            {id:'ARGRIBANK',name:'AGRIBANK'},
        ]
    }

    ngOnInit() {
        this.dataModel = new model.BankAccountJTable();
        this.myform = this.CreateForm();
    }


    CreateForm(): FormGroup {
        return this._formBuilder.group({
            BankAccount: [this.dataModel.BankAccount, Validators.required],
            BankName: [this.dataModel.BankName, [Validators.required, Validators.min(0)]],
            Branch: [this.dataModel.Branch, ''],
            Province: [this.dataModel.Province, ''],
            Address: [this.dataModel.Address, ''],
            Owner: [this.dataModel.Owner, ''],
            Notes: [this.dataModel.Note, ''],
        });
    }

    updateActive(item:any){
        this.checkedActive = item.toElement.checked;
    }


    onAddNew(){
            this.submitted = true;
            of(this.myform.valid)
                .pipe(
                    filter(m => m),
                    switchMap(() => {
                        const request: model.BankAccountJTable = this.myform.getRawValue();
                        request.Active = this.checkedActive;
                        this.utility.showProcessing(this.blockUI);
                        return this.ctService.addBankAccount(request);
                    }),
                    catchError(() => {
                        this.utility.cancelProcessing(this.blockUI);
                        return of({
                            status: false,
                            errorCode: ErrorCodeDefine.UNKNOW_ERROR,
                            parameters: null
                        });
                    })
                )
                .subscribe((response) => {
                    this.utility.cancelProcessing(this.blockUI);
                    if (!response.status) {
                        this.utility.showError(response.errorCode,
                            response.parameters);
                        return;
                    }
    
                    this.utility.showMessage('Thêm mới thành công');
                    this.activeModal.close('');
                });
    }
 

    ngAfterViewInit(): void {

    }
}


