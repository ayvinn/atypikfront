import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Property } from 'src/app/app.models';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomFieldsService } from 'src/app/services/custom-fields.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomFieldComponent } from './add-custom-field/add-custom-field.component';

@Component({
  selector: 'app-custom-fields',
  templateUrl: './custom-fields.component.html',
  styleUrls: ['./custom-fields.component.scss']
})
export class CustomFieldsComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Value', 'actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  data: string[] = ['Booleen', 'Texte', 'Nombre'];
  constructor(public appService: AppService, public customfieldsservice: CustomFieldsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loaddata(0);
  }
  propertyType(data) {
    return this.data[parseInt(data)];
  }
  list: any[] = [];
  loaddata(val: any) {
    this.customfieldsservice.getCustomFields().subscribe(res => {
      if (!res) {
        return;
      }
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(AddCustomFieldComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });

  }
  public initDataSource(data: any) {


    this.dataSource = new MatTableDataSource<Property>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public remove(element: any) {
    if (element !== -1) {
      const message = 'Etes Vous sur ?';
      let dialogRef = this.appService.openConfirmDialog(null, message);
      dialogRef.afterClosed().subscribe(dialogResult => {
        if (dialogResult) {
          this.customfieldsservice.deleteCustomField(element).subscribe(res => {
            this.ngOnInit();
          }
          )
        }
      });
    }
  }


  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onPaginateChange(event) {
    this.loaddata(JSON.stringify(event.pageIndex));
  }
}
