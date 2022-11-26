import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
curruser:boolean | undefined
  constructor() { }

  ngOnInit(): void {
  }
credit(){
this.curruser=true
}
enter(){
this.curruser=false
}
}
