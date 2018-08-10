import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  forms$: Object;
  error$: Object;

  constructor(private data: DataService) { 

  }

  ngOnInit() {
    this.data.getForms().subscribe(
      data => this.forms$ = data,
      error => this.error$ = error
    )
  }

  onClick(form: Object){
    this.data.postForms(form).subscribe(
      error => this.error$ = error
    );
  }

  /*onKey(event: any){
    this.forms$.
  }*/
}
