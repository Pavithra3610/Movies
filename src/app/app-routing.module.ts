import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TamilmovieComponent}from'./tamilmovie/tamilmovie.component';
import { EnglishComponent } from './english/english.component';
import { HomeComponent } from './home/home.component';
import { HindiComponent } from './hindi/hindi.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"tamilmovie",component:TamilmovieComponent},
  {path:"english",component:EnglishComponent},
  {path:"hindi",component:HindiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
