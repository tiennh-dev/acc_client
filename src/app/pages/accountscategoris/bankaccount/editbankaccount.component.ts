import { Component, OnInit, AfterViewInit, EventEmitter, Input, ɵConsole } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, catchError, filter, startWith } from 'rxjs/operators';
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
    selector: 'app-bankaccount-edit',
    templateUrl: './editbankaccount.component.html'
})

export class EditbankAccountComponent implements AfterViewInit, OnInit {
    @BlockUI('blockui') blockUI: NgBlockUI;
    @Input() bankAccountId;
    public myform: FormGroup;
    private dataModel: model.BankAccountEdit;
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
            {id:'BIDV',name:'BIDV'},
            {id:'MSB',name:'MSB'},
            {id:'VIETCOMBANK',name:'VIETCOMBANK'},
            {id:'PHUONGDONG',name:'PHUONGDONG'},
            {id:'ARGRIBANK',name:'AGRIBANK'},
        ]
    }

    ngOnInit() {
        this.dataModel = new model.BankAccountEdit();
        this.myform = this.CreateForm();
        this.ctService.bankAccountById(this.bankAccountId).subscribe(response=>{
            this.dataModel = response.data;
            this.checkedActive = this.dataModel.active;
            console.log(this.checkedActive);
        });
    }

    CreateForm(): FormGroup {
        return this._formBuilder.group({
            bankAccount: [this.dataModel.bankAccount, Validators.required],
            bankName: [this.dataModel.bankName, [Validators.required, Validators.min(0)]],
            branch: [this.dataModel.branch, ''],
            province: [this.dataModel.province, ''],
            address: [this.dataModel.address, ''],
            owner: [this.dataModel.owner, ''],
            note: [this.dataModel.note, ''],
            active: [this.dataModel.active, ''],
        });
    }
   

    edit(){
        this.submitted = true;
        of(this.myform.valid)
            .pipe(
                filter(m => m),
                switchMap(() => {
                    var request=this.myform.getRawValue();
                    request.id = this.bankAccountId;
                    return this.ctService.editBankAccount(request);
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

                this.utility.showMessage('Thay đổi thông tin thành công');
                this.activeModal.close('');
            });   
    }
 

    ngAfterViewInit(): void {

    }
}


