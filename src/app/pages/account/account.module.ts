import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { InputFileModule } from 'ngx-input-file';
import { AgmCoreModule } from '@agm/core';  
import { AccountComponent } from './account.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { LogementsComponent } from './logements/logements.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { AddCustomFieldComponent } from './custom-fields/add-custom-field/add-custom-field.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { AddEquipmentComponent } from './equipments/add-equipment/add-equipment.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AddCommentComponent } from './bookings/add-comment/add-comment.component';
import { UsersComponent } from './users/users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { UploadTaskComponent } from 'src/app/shared/upload-manager/upload-task/upload-task.component';
import { UploadManagerComponent } from 'src/app/shared/upload-manager/upload-manager/upload-manager.component';

export const routes = [
  { 
    path: '', 
    component: AccountComponent, children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' }, 
      { path: 'my-properties', component: MyPropertiesComponent },
      { path: 'my-properties/:id', component: EditPropertyComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'logements', component: LogementsComponent },
      { path: 'equipment', component: EquipmentsComponent },
      { path: 'custom', component: CustomFieldsComponent },
      { path: 'bookings', component: BookingsComponent },
      { path:  'users' , component: UsersComponent},

    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,UploadManagerComponent,
    AccountComponent,  
    MyPropertiesComponent, 
    FavoritesComponent, 
    ProfileComponent, 
    EditPropertyComponent,UploadTaskComponent, LogementsComponent, CustomFieldsComponent, AddCustomFieldComponent, EquipmentsComponent, AddEquipmentComponent, BookingsComponent, AddCommentComponent, UsersComponent, EditUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    InputFileModule,
    AgmCoreModule
  ]
})
export class AccountModule { }
