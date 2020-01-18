import { Routes, RouterModule } from '@angular/router';
import { CommonModule, DecimalPipe, CurrencyPipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { BlockUIModule } from 'ng-block-ui';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditorModule } from '@tinymce/tinymce-angular';
import { jqxBarGaugeModule }    from 'jqwidgets-ng/jqxbargauge';
import{ jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
import { IndexComponent } from './index.component';
 
const routes: Routes = [
  {
    path: '',
     component: IndexComponent,
  }
];
@NgModule({
  declarations: [
     IndexComponent,
     jqxTreeGridComponent
  ],
  imports: [
    CommonModule,
    jqxBarGaugeModule,
    FormsModule, FileUploadModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
    DragDropModule,
    RouterModule.forChild(routes),
    BlockUIModule.forRoot({
      delayStart: 100,
      delayStop: 500
    }),
    NgSelectModule,
    EditorModule
  ],
  providers: [
     
  ],
  bootstrap: [
    IndexComponent,
  ],
})

export class AccountingAccountsComponentModule {
}
