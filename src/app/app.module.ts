import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SeatMapComponent } from "./seat-map/seat-map.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
} from "@angular/material/bottom-sheet";
import { FareAttributesPopupComponent } from "./fare-attributes-popup/fare-attributes-popup.component";
import { FareAttributeBottomSheetComponent } from "./fare-attribute-bottom-sheet/fare-attribute-bottom-sheet.component";

@NgModule({
  declarations: [
    AppComponent,
    SeatMapComponent,
    FareAttributesPopupComponent,
    FareAttributeBottomSheetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
  ],
  providers: [],
  entryComponents: [FareAttributeBottomSheetComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
