import { Component, OnInit, Inject } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from "@angular/material/bottom-sheet";

@Component({
  selector: "app-fare-attribute-bottom-sheet",
  templateUrl: "./fare-attribute-bottom-sheet.component.html",
  styleUrls: ["./fare-attribute-bottom-sheet.component.scss"],
})
export class FareAttributeBottomSheetComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<
      FareAttributeBottomSheetComponent
    >
  ) {
    console.log("inside bottom sheet");
    console.log(data);
  }
  close() {
    this._bottomSheetRef.dismiss();
  }
  getCurrency(currency: string) {
    let currencyCharacter = "$";
    switch (currency) {
      case "USD":
        currencyCharacter = "$";
    }
    return currencyCharacter;
  }
  ngOnInit() {}
}
