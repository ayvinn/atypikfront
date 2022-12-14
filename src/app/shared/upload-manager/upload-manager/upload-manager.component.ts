import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-manager',
  templateUrl: './upload-manager.component.html',
  styleUrls: ['./upload-manager.component.scss']
})
export class UploadManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  isHovering: boolean;
  files: File[] = [];

  toggleHover(event: boolean) {
      this.isHovering = event;
  }

  onDrop(files: FileList) {
      for (let i = 0; i < files.length; i++) {
          console.log('uploadManager adding file: ', files.item(i));
          this.files.push(files.item(i));
      }
  }


}
