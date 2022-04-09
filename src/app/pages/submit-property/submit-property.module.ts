import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';  
import { InputFileModule } from 'ngx-input-file';
import { SubmitPropertyComponent } from './submit-property.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { UploadManagerComponent } from 'src/app/shared/upload-manager/upload-manager/upload-manager.component';
import { UploadTaskComponent } from 'src/app/shared/upload-manager/upload-task/upload-task.component';
export const routes = [
  { path: '', component: SubmitPropertyComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [SubmitPropertyComponent,UploadManagerComponent,UploadTaskComponent],
  imports: [
    CommonModule,
    
    RouterModule.forChild(routes),
    SharedModule,
    AgmCoreModule, 
    InputFileModule,
    NgxDropzoneModule
  ]
})
export class SubmitPropertyModule { }
