import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Origin',
    
  })
};

@Injectable({
  providedIn: 'root'
})



export class DataService {

  data$ : Object;

  constructor(private http: HttpClient) { }

  getForms(){
    return this.http.get('http://localhost:3000/forms').pipe(
      retry(3), // retry a failed request up to 3 times
    );
  }
  patchForms(id: String,form: Object) {
    return this.http.patch('http://localhost:3000/forms/'+id,form,httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
    )
  }
  postForms(form: Object) {
    return this.http.post('http://localhost:3000/forms',form,httpOptions).pipe(
      retry(3), // retry a failed request up to 3 times
    );
  }
}
