import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = 'fruit';
  fruit = {
    name: "Banana",
    color: "Yellow",
    price: "$0.59"
  }
  sale(e){
    alert("This fruit is on sale");
  }
}
