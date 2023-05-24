import { Component } from '@angular/core';
import { environment } from './environments/environment.prod';

@Component({
  selector: 'app-root',
  template: `
  <h1>My Angular App</h1>
  <p> API Key:{{apiKey}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodblog';
  apiKey=environment.apiKey

}
