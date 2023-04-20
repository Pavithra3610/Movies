import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TamilmovieComponent } from './tamilmovie/tamilmovie.component';
import { EnglishComponent } from './english/english.component';
import { HomeComponent } from './home/home.component';
import { HindiComponent } from './hindi/hindi.component';


@NgModule({
  declarations: [
    AppComponent,
    TamilmovieComponent,
    EnglishComponent,
    HomeComponent,
    HindiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
