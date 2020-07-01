import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatComponent } from './seat/seat.component';
import { SeatMapFlightDetailsComponent } from './seat-map-flight-details/seat-map-flight-details.component';
import { SeatMapComponent } from './seat-map/seat-map.component';
import { SeatTypeDetailsComponent } from './seat-type-details/seat-type-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatComponent,
    SeatMapFlightDetailsComponent,
    SeatMapComponent,
    SeatTypeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
