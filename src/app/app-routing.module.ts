import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AbouComponent} from "./about/abou.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id', //router parameter
    component: AbouComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
