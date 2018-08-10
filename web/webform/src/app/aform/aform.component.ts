import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aform',
  templateUrl: './aform.component.html',
  styleUrls: ['./aform.component.scss']
})
export class AformComponent implements OnInit {

  id: String;
  title: String;
  date1: String;
  date2: String;
  author: String;
  content: String;
  posttime: String;

  constructor() { }

  ngOnInit() {
  }

}
