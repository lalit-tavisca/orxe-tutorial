import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { OutlineDirective } from './directives/outline.directive';
import { AppNotDirective } from './directives/app-not.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItineraryComponent,
    OutlineDirective,
    AppNotDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
