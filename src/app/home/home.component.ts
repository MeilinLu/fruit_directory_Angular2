import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the homepage...";
  myString = "I love fruits!"
  myBoolean = true;

  alertMe1(){
    alert('Hello');
  }
  alertMe2(val){
    alert(val);
  }

  constructor() { }

  ngOnInit() {
  }

}
