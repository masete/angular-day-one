import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'This is angular for dummies';

  handleEvent(){
    console.log('Button Clicked', this.title)
  }
}
