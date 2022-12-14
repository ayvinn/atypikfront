import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File;
  task: AngularFireUploadTask;                                        // this does the uploading for us

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  table :any  = []; 
  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private globalservice : UploadService) {  }

  ngOnInit(): void {
      this.startUpload();
  }

  startUpload() {
      console.log('uploading file', this.file);

      let safeName = this.file.name.replace(/([^a-z0-9.]+)/gi, '');   // file name stripped of spaces and special chars
      let timestamp = Date.now();                                     // ex: '1598066351161'
      const uniqueSafeName = timestamp + '_' + safeName;
      const path = 'uploads/' + uniqueSafeName;                       // Firebase storage path
      const ref = this.storage.ref(path);                             // reference to storage bucket

      this.task = this.storage.upload(path, this.file);
      this.percentage = this.task.percentageChanges();                // progress monitoring
      this.snapshot = this.task.snapshotChanges().pipe(               // emits a snapshot of the transfer progress every few hundred milliseconds
          tap(console.log),
          finalize(async () => {                                      // after the observable completes, get the file's download URL
              this.downloadURL = await ref.getDownloadURL().toPromise();
              this.globalservice.setMyGV(this.downloadURL,this.file.name);
              console.error('here here :', this.table);
              this.db.collection('files').doc(uniqueSafeName).set({
                  storagePath: path,
                  downloadURL: this.downloadURL,
                  originalName: this.file.name,
                  timestamp: timestamp
              })
                  .then(function () {
                      console.log('document written!');
                  })
                  .catch(function (error) {
                      console.error('Error writing document:', error);
                  });
          }),
      );console.log('!!!!!!!!!!!!!!!!!!',this.globalservice.getMyGV());
      
  }

  isActive(snapshot) {
      return (snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes);
  }


}
