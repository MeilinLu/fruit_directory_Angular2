import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the homepage...";


  /*
  myString = "I love fruits!"
  myBoolean = true;

  alertMe1(){
    alert('Hello');
  }
  alertMe2(val){
    alert(val);
  }

  fruit = {
    name:"Cherry",
    color:"Red",
    price:"$5.99"
  };
  */

  // Custom Property Binding
  @Input() fruit;
  @Output() onSale = new EventEmitter();
  fireSaleEvent(e){
    this.onSale.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
