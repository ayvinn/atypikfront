import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
public id =0;
  ngOnInit(): void {
    this.id = this.data.id;
    localStorage.setItem('accomodattionId',this.id.toString())
  }

}
