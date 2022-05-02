import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { ReservationsService } from 'src/app/services/reservations.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  form: FormGroup;
  public propertyStatuses = [];
  constructor(  @Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<PaymentComponent>,public reservationservice:ReservationsService,private formBuilder: FormBuilder,public appService:AppService,
   public snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      creditCard: ['',Validators.required],
      expirationDate:['',Validators.required],
      cvc:['',Validators.required]
    }); 
    this.propertyStatuses = this.appService.getPropertyStatuses();
  }
  onNoClick(): void {
    this.dialogRef.close();
  } 
  submit(){
    var dateconcat = '01/'+this.form.value.expirationDate;
    var exp = formatDate(new Date(dateconcat), 'yyyy/dd/MM', 'en');
    var last = new Date(exp);
    const values = {accommodationId: this.data.accommodationId, cardNumber: this.form.value.creditCard,cvc : this.form.value.cvc , 
                     dateArrival :this.data.datestart,dateDeparture:this.data.dateend,expiration:last,travelers:this.data.numberprs,
                     month:last.getMonth()+1,year:last.getFullYear()
    };
    console.log('Ajouter :',values);
    this.reservationservice.postReservations(values).subscribe(res => {
      console.log('Ajouter : ', res);
      if (res) {
        this.snackBar.open("Success la reservation est en attente d'approvement !", '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 }); 
      }
      else
      this.snackBar.open('Erreur', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
      this.onNoClick();
    },
      err => {
        console.log(err);
      });
  }

}
function MD_DIALOG_DATA(MD_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

