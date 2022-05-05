import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NearbyService } from 'src/app/services/nearby.service';
import { OptionsService } from 'src/app/services/options.service';
import { UsersService } from 'src/app/services/users.service';
import { emailValidator } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-contact-host',
  templateUrl: './contact-host.component.html',
  styleUrls: ['./contact-host.component.scss']
})
export class ContactHostComponent implements OnInit {
  public contactForm: FormGroup;
  public lat: number = 48.844101;
  public lng: number = 2.431290;
  public zoom: number = 12; 
  public propertyId:any;
  public sub:any;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,public formBuilder: FormBuilder,public snearbyservice : NearbyService,
  private activatedRoute: ActivatedRoute,public UserService:UsersService,public dialogRef: MatDialogRef<ContactHostComponent>) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      message: ['', Validators.required]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public async onContactFormSubmit(values:Object){
    if (this.contactForm.valid) {
      this.sub = this.activatedRoute.params.subscribe(params => {   
        this.propertyId = params['id'];
      });
      var data = await this.UserService.getUsersprofile().toPromise();
      const values = {description: this.contactForm.value.message,name:data['firstName']+" "+data['lastName'],price:0,url:"",distance:0,address:{addressComplement: "",city:new Date(),cityCode:"",postalCode:"",street:"",x:null,y:null},photos:[], accommodationId:parseInt(this.data.accommodationId)};
      console.log(values);
      this.snearbyservice.postNearby(values).subscribe();
      this.onNoClick();
    }
  }
}
