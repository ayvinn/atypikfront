import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';  
import { SharedModule } from '../../shared/shared.module';
import { PropertiesComponent } from './properties.component';
import { PropertyComponent } from './property/property.component';
import { PaymentComponent } from './payment/payment.component';
//import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { ContactHostComponent } from './contact-host/contact-host.component';

export const routes = [
  { path: '', component: PropertiesComponent, pathMatch: 'full' },
  { path: ':id', component: PropertyComponent }
];

@NgModule({
  declarations: [
    PropertiesComponent, 
    PropertyComponent, PaymentComponent, ContactHostComponent,
    
  ],
  exports: [
    PropertiesComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule,
    SharedModule,
    CreditCardDirectivesModule
  ],
  providers: [

   // { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
    
  ],
})
export class PropertiesModule { }
