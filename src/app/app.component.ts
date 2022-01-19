import { Component } from '@angular/core';

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

  handleEvent(){
    console.log('Button Clicked', this.title)
  }
}
