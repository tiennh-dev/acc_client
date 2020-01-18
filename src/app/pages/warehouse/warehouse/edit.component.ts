import { WarehouseService } from './../../../services/warehouse.service';
import { Component, OnInit, AfterViewInit, Input, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { of, merge } from 'rxjs';
import { NgbActiveModal, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, catchError, filter, startWith, map } from 'rxjs/operators';
import { ErrorCodeDefine } from 'src/app/common/error-code-define';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ConfigSetting } from 'src/app/common/config-setting';
import * as model from '../../../models/model/warehouse.model';
import { UtilityService } from 'src/app/services/utility.service';
const URL = ConfigSetting.IMAGE_UPLOAD;

@Component({
    selector: 'app-warehouse-edit',
    templateUrl: './edit.component.html',
})


export class EditComponent implements AfterViewInit, OnInit {
    @Input() itemId: any;
    public form: FormGroup;
    private dataModel: model.WarehouseUpdate;
    get f() { return this.form.controls; }
    submitted = false;
    uploader: FileUploader;
    public image_preview = null;
    constructor(private ctService: WarehouseService,
        private utility: UtilityService,
        public activeModal: NgbActiveModal,
        private _formBuilder: FormBuilder) {
        const token: string = ConfigSetting.GetAuthenToken;
        this.uploader = new FileUploader({
            url: URL, allowedMimeType: ['image/png', 'image/gif', 'image/jpg', 'image/jpeg'],
            autoUpload: true,
            authToken: 'Bearer ' + token
        });
    }


    ngOnInit() {
        this.dataModel = new model.WarehouseUpdate();

        this.ctService.getDetail(this.itemId)
            .subscribe(response => {
                if (!response.status) {
                    this.utility.showError(response.errorCode,
                        response.parameters);
                }
                this.dataModel = response.data;

                this.form = this.onCreateForm();
            });

        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
        };
    }

    onCreateForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.dataModel.id, null],
            code: [this.dataModel.code, Validators.required],
            yacode: [this.dataModel.yaCode, null],
            name: [this.dataModel.name, Validators.required],
            description: [this.dataModel.description, null],
            address: [this.dataModel.address, null],
        });
    }

    onSubmit(): void {
        this.submitted = true;
        of(this.form.valid)
            .pipe(
                filter(m => m),
                switchMap(() => {
                    return this.ctService.update(this.dataModel);
                }),
                catchError(() => {
                    return of({
                        status: false,
                        errorCode: ErrorCodeDefine.UNKNOW_ERROR,
                        parameters: null
                    });
                })
            )
            .subscribe((response) => {
                if (!response.status) {
                    this.utility.showError(response.errorCode,
                        response.parameters);
                    return;
                }

                this.utility.showMessage('Warehouse saved');
                this.activeModal.close('');
            });
    }

    ngAfterViewInit(): void {

    }
}


