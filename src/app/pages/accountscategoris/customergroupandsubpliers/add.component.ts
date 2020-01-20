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
    selector: 'app-customergroup-add',
    templateUrl: './add.component.html'
})

export class AddCustomerGroupAndSuppliersComponent implements AfterViewInit, OnInit {
    @BlockUI('blockui') blockUI: NgBlockUI;
    ngOnInit(){}
 

    ngAfterViewInit(): void {

    }
}


