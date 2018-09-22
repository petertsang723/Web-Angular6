import { Component, OnInit, ViewChild, ElementRef, OnChanges, HostListener } from '@angular/core';
import { Form } from '../form';
import { Attachment } from '../attachment';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { TinymceComponent } from '../tinymce/tinymce.component';
import { FileUploader } from 'ng2-file-upload';
import { Observable } from 'rxjs';
import {MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-submitformpage',
  templateUrl: './submitformpage.component.html',
  styleUrls: ['./submitformpage.component.scss']
})
export class SubmitformpageComponent implements OnInit,OnChanges {
  form$ : Form = {title:"", date1: "" , date2: "" ,  author: "",  content: "",  posttime: "",  iconurl: "./src/assets/userimage/585e4bf3cb11b227491c339a.png", attachments: []};
  files: File[] = [];
  attachments: Attachment[] = [];

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(2999, 0, 1);
  error$: Object;
  resp$: Object;
  innerHeight: any;
  public uploader:FileUploader = new FileUploader({url: ""});
  public hasBaseDropZoneOver:boolean = false;
  
  mce_height: any;

  constructor(private data: DataService) {}


  
  
  @ViewChild('tinymce') tinymceEV: ElementRef;
  @ViewChild('spacer') spacerEV: ElementRef;
  @ViewChild('matdialog') matdialogEV
  @ViewChild(TinymceComponent) private tinymce: TinymceComponent

  
  ngOnInit() {
    this.form$['date1'] = this.date.value;
    this.form$['posttime'] = this.date.value;
    this.innerHeight = 60;
    this.mce_height = this.matdialogEV.nativeElement.offsetHeight - 410;
    console.log(this.mce_height)
  }

  ngOnChanges(){
    //this.tinymce.resize(null,this.matdialogEV.nativeElement.offsetHeight - 410);
  }


  @HostListener('window:resize', ['$event'])

  onResize(event) {
    this.tinymce.resize(null,this.matdialogEV.nativeElement.offsetHeight - 410);
  }



  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
    if(e == false)
    {
      //console.log(this.uploader.queue);
    }
  }

  public onFileDrop(fileList: File[]): void {
    for (var i = 0; i < fileList.length; i++) {
      var file:File = fileList[i];
           
      this.fileonload(file).subscribe((attm) => {
        this.attachments.push(attm);
      });
    }
    
    console.log (this.attachments);
  }

  public fileonload (file: File) {
    var attm:Attachment = new Attachment();
    const reader:FileReader = new FileReader();
    reader.readAsDataURL(file);
    return Observable.create(observer => {
      reader.onloadend = () => {
        attm['filename'] = file.name;
        attm['size'] = file.size;
        attm['content'] = reader.result;
        observer.next(attm);
        observer.complete();
      }
    })
  }
 

  submitform(){
    this.form$.attachments = this.attachments;
    this.data.postForms(this.form$).subscribe(
      resp => this.resp$ = resp,
      error => this.error$ = error,
      () => console.log(this.resp$)
    );
  }

  test(form: any)
  {
    console.log(form);
  }

  onContentChange(event: any)
  {
    this.form$.content = event;
    console.log(this.form$);
  }

  onKey(event: any)
  {
    this.tinymce.resize(null,this.matdialogEV.nativeElement.offsetHeight - 410);
  }

}
