import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { InputFileModule } from 'ngx-input-file';
import { AgmCoreModule } from '@agm/core';  
import { HostComponent } from './host.component';


export const routes = [
  { 
    path: '', 
    component: HostComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' }, 
   /*   { path: 'my-properties', component: MyPropertiesComponent },
      { path: 'my-properties/:id', component: EditPropertyComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'logements', component: LogementsComponent },
      { path: 'equipment', component: EquipmentsComponent },
      { path: 'custom', component: CustomFieldsComponent },
      { path: 'bookings', component: BookingsComponent },*/

    ]
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    InputFileModule,
    AgmCoreModule
  ]
})
export class HostModule { }
