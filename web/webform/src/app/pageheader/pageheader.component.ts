import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DataService } from '../data.service';
import { SubmitformpageComponent } from '../submitformpage/submitformpage.component';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.scss']
})
export class PageheaderComponent implements OnInit {

  constructor(public dialog: MatDialog,private data: DataService) { }
  form$: Object;
  resp$: Object;

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SubmitformpageComponent,{
      height: '100%',
      width: '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onPost(form: Object)
  {
    this.data.postForms(form).subscribe(
      resp => this.resp$ = resp
    );
  }

}
