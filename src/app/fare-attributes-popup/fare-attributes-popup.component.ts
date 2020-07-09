import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { FareAttributeBottomSheetComponent } from "../fare-attribute-bottom-sheet/fare-attribute-bottom-sheet.component";

@Component({
  selector: "app-fare-attributes-popup",
  templateUrl: "./fare-attributes-popup.component.html",
  styleUrls: ["./fare-attributes-popup.component.scss"],
})
export class FareAttributesPopupComponent implements OnInit {
  private sheet;
  constructor(private _bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    let sheet = this._bottomSheet.open(FareAttributeBottomSheetComponent, {
      data: {
        attributeList: [
          "Checked bags",
          "Carry-on bag",
          "Ticket change",
          "Ticket refund",
          "Seat assigment",
        ],
        brandDetails: [
          {
            brandName: "Basic economy",
            amount: 125,
            currency: "USD",
            attributes: [
              "AvailableForACharge",
              "Available",
              "NotOffered",
              "NotOffered",
              "NotOffered",
            ],
          },
          {
            brandName: "Main Cabin",
            amount: 212,
            currency: "USD",
            attributes: [
              "AvailableForACharge",
              "Available",
              "AvailableForACharge",
              "NotOffered",
              "Available",
            ],
          },
          {
            brandName: "Economy plus",
            amount: 300,
            currency: "USD",
            attributes: [
              "AvailableForACharge",
              "Available",
              "AvailableForACharge",
              "Available",
              "Available",
            ],
          },
        ],
      },
    });
    sheet.afterDismissed().subscribe(this.onSheetClose);
  }

  onSheetClose(): void {
    console.log("Sheet closed");
  }

  ngOnInit() {}
}
