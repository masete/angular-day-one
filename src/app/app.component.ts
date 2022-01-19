import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is angular for dummies';
  jsonValue = {
    a: 'hello',
    b: 'world'
  }

  newDate = new Date();


  intro = 'Hello world how are you all ?'

  constructor(private httpService:  HttpService){

  }
  handleEvent(){
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1');
  }


}
