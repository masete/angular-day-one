import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'This is angular for dummies';
  // jsonValue = {
  //   a: 'hello',
  //   b: 'world'
  // }

  userObject = {
    name: 'Nicholas',
    age: '28',
    id:  0,
    isColored: true
  }

  // newDate = new Date();


  // intro = 'Hello world how are you all ?'

  showUser: boolean = true;

  posts: any = this.httpService.getRequest('https://jsonplaceholder.typicode.com/post');

  constructor(private httpService:  HttpService){

  }
  // handleEvent(){
  //   this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
  //   .subscribe((response) => {
  //   // this.jsonValue = response;
  //   console.log('hello')
  // });

  handleEvent(event: any){
    console.log(event)
  }
  // getPosts(): any{
  //   this.httpService.getRequest('https://jsonplaceholder.typicode.com/post')
  //   .subscribe((response)=>{
  //     this.posts = response;

    // })
  // }
  // ngOnInit() {
    // this.getPosts();
  // }
}



