import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Form } from '../form';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.scss']
})
export class FormpageComponent implements OnInit {
  
  forms$: Object;
  error$: Object;
  resp$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getForms().subscribe(
      data => this.forms$ = data,
      error => this.error$ = error
    )
  }

  onPatch(form: Object)
  {
    this.data.patchForms(form['_id'],form).subscribe(
      resp => this.resp$ = resp,
      error => this.error$ = error,
      () => console.log(this.resp$)
    );
  }
  
  onKey(event: any,form: Object,key :String)
  {
    form[key.toString()] = event.target.value;
  }
}


    /*for(this.formcounter in this.forms$)
    {
      Object.keys(this.forms$[this.formcounter.toString()]).forEach(element => {
        this.arrtemp.push(this.forms$[this.formcounter.toString()][element]);
      });
      console.log(this.arrtemp);
      this.arrtemp = [];
    }*/