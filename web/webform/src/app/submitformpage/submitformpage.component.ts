import { Component, OnInit } from '@angular/core';
import { Form } from '../form';

@Component({
  selector: 'app-submitformpage',
  templateUrl: './submitformpage.component.html',
  styleUrls: ['./submitformpage.component.scss']
})
export class SubmitformpageComponent implements OnInit {
  constructor() { }



  ngOnInit() {
  }

  onKey()
  {
    console.log("FUCk U");
  }
}
