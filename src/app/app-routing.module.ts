import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FourthComponent } from './fourth/fourth.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path:'first', component: FirstComponent},
  {path:'second', component: SecondComponent},
  {path:'third', component: ThirdComponent},
  {path:'fourth', component: FourthComponent},

//setting up a redirect
{
  path: '',
  redirectTo: '/first'
},

//setting up a wildcard
  {
    path: '**',
    component: SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
