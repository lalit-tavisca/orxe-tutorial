import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatmapComponent } from './seatmap/seatmap.component';
import { SeatmapService } from './services/seatmap-service';
import { HttpClientModule } from '@angular/common/http';
import { NgxFontAwesomeModule } from 'ngx-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    SeatmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxFontAwesomeModule,   
  ],
  providers: [SeatmapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
