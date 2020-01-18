import { WarehouseService } from './../../../services/warehouse.service';
import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { of, merge } from 'rxjs';
import { NgbActiveModal, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, catchError, filter, startWith, map } from 'rxjs/operators';
import { ErrorCodeDefine } from 'src/app/common/error-code-define';
// -----------------------
import * as model from '../../../models/model/warehouse.model';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
    selector: 'app-warehouse-add',
    templateUrl: './add.component.html'
})

export class AddComponent implements AfterViewInit, OnInit {
    public form: FormGroup;
    public dataModel: model.WarehouseAdd;
    public get f() { return this.form.controls; }
    submitted = false;

    constructor(private ctService: WarehouseService,
        private utility: UtilityService,
        public activeModal: NgbActiveModal,
        private _formBuilder: FormBuilder,
    ) {
    }

    ngOnInit() {
        this.dataModel = new model.WarehouseAdd();
        this.form = this.onCreateForm();
    }

    onCreateForm(): FormGroup {
        return this._formBuilder.group({
            code: [this.dataModel.code, Validators.required],
            name: [this.dataModel.name,  Validators.required],
            yacode: [this.dataModel.yacode,  null],
            description: [this.dataModel.description, null],
            address: [this.dataModel.address, null],
            id: [this.dataModel.id, null]
        });
    }

    onSubmit(): void {
        this.submitted = true;
        of(this.form.valid)
            .pipe(
                filter(m => m),
                switchMap(() => {
                    return this.ctService.add(this.dataModel);
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


