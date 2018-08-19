import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

export type EditorType = 'card' | 'list';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.scss']
})
export class FormpageComponent implements OnInit {
  
  type: EditorType = 'card';

  constructor() { }

  ngOnInit() {

  }

  get showCardView() {
    return this.type === 'card';
  }

  get showListView() {
    return this.type === 'list';
  }

  toggleView(type: EditorType) {
    this.type = type;
  }


}


    /*for(this.formcounter in this.forms$)
    {
      Object.keys(this.forms$[this.formcounter.toString()]).forEach(element => {
        this.arrtemp.push(this.forms$[this.formcounter.toString()][element]);
      });
      console.log(this.arrtemp);
      this.arrtemp = [];

  onPatch(form: Object)
  {
    this.data.patchForms(form['_id'],form).subscribe(
      resp => this.resp$ = resp,
      error => this.error$ = error,
      () => console.log(this.resp$)
    );
  }

    }*/