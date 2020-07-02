import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatComponent } from './seat/seat.component';
import { SeatMapFlightDetailsComponent } from './seat-map-flight-details/seat-map-flight-details.component';
import { SeatMapComponent } from './seat-map/seat-map.component';
import { SeatTypeDetailsComponent } from './seat-type-details/seat-type-details.component';
import { SeatMapResultsPageComponent } from './seat-map-results-page/seat-map-results-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatComponent,
    SeatMapFlightDetailsComponent,
    SeatMapComponent,
    SeatTypeDetailsComponent,
    SeatMapResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
