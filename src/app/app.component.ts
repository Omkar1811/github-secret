import { Component } from '@angular/core';
import { environment } from 'src/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

const apiKey=environment.apiKey;
console.log(apiKey)
export class AppComponent {
  title = 'foodblog';
  

}
