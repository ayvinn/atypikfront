import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { InputFileModule } from 'ngx-input-file';
import { AgmCoreModule } from '@agm/core';  
import { HostComponent } from './host.component';
import {MatTabsModule} from '@angular/material/tabs';

export const routes = [
  { 
    path: '', 
    component: HostComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' }, 
    ]
  }
];

@NgModule({
  declarations: [
    HostComponent
  ],
  exports: [
    HostComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    InputFileModule,
    AgmCoreModule,
    MatTabsModule,
    
  ]
})
export class HostModule { }
