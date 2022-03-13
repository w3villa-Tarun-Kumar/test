import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  color='blue';
  err=false;
  togglecolor(){
    this.err=!this.err;
  }
  ngOnInit(): void {
  }

}
