import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Form } from '../form';
import {FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import { TinymceComponent } from '../tinymce/tinymce.component';

@Component({
  selector: 'app-submitformpage',
  templateUrl: './submitformpage.component.html',
  styleUrls: ['./submitformpage.component.scss']
})
export class SubmitformpageComponent implements OnInit,AfterViewInit {
  form$ : Form = {title:"", date1: "" , date2: "" ,  author: "",  content: "",  posttime: "",  iconurl: "./src/assets/userimage/585e4bf3cb11b227491c339a.png"};
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(2999, 0, 1);
  constructor(private data: DataService) {}
  
  error$: Object;
  resp$: Object;
  
  ngAfterViewInit(){
    //this.form$['iconurl'] = "./src/assets/userimage/585e4bf3cb11b227491c339a.png";
  }
  
  
  ngOnInit() {
    this.form$['date1'] = this.date.value;
    this.form$['posttime'] = this.date.value;
  }

  submitform(){
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

  onKey(event: any)
  {
    this.form$.content = event;
    console.log(this.form$);
  }
}
