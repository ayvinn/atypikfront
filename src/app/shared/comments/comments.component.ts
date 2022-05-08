import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccommodationsService } from 'src/app/services/accommodations.service';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public commentForm: FormGroup;
  
  public reviews = [
    { 
      author: 'Bruno Vespa', 
      avatar: 'assets/images/avatars/avatar-1.png', 
      tooltip: 'Dissatisfied', 
      icon: 'sentiment_dissatisfied',
      date: '13 January, 2018 at 7:09',
      text: 'Integer id eros et mi fringilla imperdiet. In dictum turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna.'
    },
    { 
      author: 'Julia Aniston', 
      avatar: 'assets/images/avatars/avatar-2.png', 
      tooltip: 'Very Satisfied', 
      icon: 'sentiment_very_satisfied',
      date: '04 February, 2018 at 10:22',
      text: 'Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem. Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo molestie arcu. Nulla finibus ex tortor, et suscipit magna semper consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius malesuada vel non felis.'
    },
    { 
      author: 'Andy Warhol', 
      avatar: 'assets/images/avatars/avatar-3.png', 
      tooltip: 'Neutral', 
      icon: 'sentiment_neutral',
      date: '14 February, 2018 at 11:10',
      text: 'Pellentesque hendrerit vel turpis aliquam placerat. Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis nibh. Etiam eget enim at orci interdum maximus nec in ante.'
    }
  ];
  public ratings = [
    { title: 'Très Insatisfait', icon: 'sentiment_very_dissatisfied', percentage: 20, selected: false },
    { title: 'Insatisfait', icon: 'sentiment_dissatisfied', percentage: 40, selected: false },
    { title: 'Neutre', icon: 'sentiment_neutral', percentage: 60, selected: false },
    { title: 'Satisfait', icon: 'sentiment_satisfied', percentage: 80, selected: false },
    { title: 'Très Satisfait', icon: 'sentiment_very_satisfied', percentage: 100, selected: false }
  ];
  private sub: any;
  public isadmin = 'false';
  private propertyId: any;
  constructor(public fb: FormBuilder,
    private activatedRoute: ActivatedRoute
    ,public router: Router,public accommodationsservice :AccommodationsService,private _snackBar: MatSnackBar) { }
  public comments = [];
  async ngOnInit() {
    
    this.sub = this.activatedRoute.params.subscribe(params => {   
      this.propertyId = params['id'];
    });
    this.isadmin = localStorage.getItem('isadmin');
    console.log(this.propertyId);
    if(this.propertyId!=null) {const data = await this.accommodationsservice.getAccommodation(parseInt(this.propertyId)).toPromise();
    this.comments = data['comments'];}
    this.commentForm = this.fb.group({ 
      review: [null, Validators.required],            
      rate: null,
      propertyId: this.propertyId
    }); 
  }
  isItemInfoRoute() {

    return this.router.url.search('properties') > -1
 }
 isItemInfoRoute2() {

  return this.router.url.search('bookings') > -1
}
  public onCommentFormSubmit(values:any){
    if (this.commentForm.valid) { 
      console.log(values);
      var id = parseInt(localStorage.getItem('propertyId'));
      
        this.accommodationsservice.postAccommodationComment({accommodationId:id,environmentalScore:values.rate
        ,content:values.review,cleanlinessScore :0 ,serviceScore:0, communicationScore:0, photos:[]
      }).subscribe(
        (data) => this.openSnackBar('Commentaire ajouter avec success !','x'),
      (err) => this.openSnackBar(err.error.message,'x')

      );
      
    } 
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  public rate(rating:any){
    this.ratings.filter(r => r.selected = false);
    this.ratings.filter(r => r.percentage == rating.percentage)[0].selected = true;
    this.commentForm.controls.rate.setValue(rating.percentage);
  }
  remove(id){
    this.accommodationsservice.deleteAcommodationComment(id).subscribe();
    this.ngOnInit();
  }

}