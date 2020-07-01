import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatmapComponent } from './seatmap/seatmap.component';
import { SeatmapService } from './services/seatmap-service';
import { HttpClientModule } from '@angular/common/http';
import { NgxFontAwesomeModule } from 'ngx-font-awesome';
import { UpdateBrandAttributeComponent } from './update-brand-attribute/update-brand-attribute.component';
import { FareOptionsService } from './services/fare-options-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SeatmapComponent,
    UpdateBrandAttributeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxFontAwesomeModule,   
    FormsModule
  ],
  providers: 
  [
    SeatmapService,
    FareOptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
