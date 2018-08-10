import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'Origin',
    'Authorization': 'Origin'
  })
};

@Injectable({
  providedIn: 'root'
})



export class DataService {

  data$ : Object;



  constructor(private http: HttpClient) { 

  }

  getForms() {
    return this.http.get('http://localhost:3000/forms');
  }
  postForms(form: Object) {
    console.log(form);
    return this.http.post('http://localhost:3000/forms',form, httpOptions);
  }
}
