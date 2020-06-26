import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap:[AppComponent]
})
export class FlightResultsModule { }
