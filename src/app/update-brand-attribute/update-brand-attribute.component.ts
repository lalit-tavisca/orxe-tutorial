import { Component, OnInit } from "@angular/core";
import { FareOptionsService } from "../services/fare-options-service";

@Component({
  selector: "app-update-brand-attribute",
  templateUrl: "./update-brand-attribute.component.html",
  styleUrls: ["./update-brand-attribute.component.scss"],
})
export class UpdateBrandAttributeComponent implements OnInit {
  isShowFareDetails: boolean;
  selectedFareType: string;

  showEcoBtn: boolean;
  showMainCabinBtn: boolean;
  showEcoPlusBtn: boolean;

  // above need to remove
  selectedFareOptions: any;
  fareOptionsToUpgrades = [];

  constructor(private fareOptionService: FareOptionsService) {
    this.fareOptionService.getFareOptionsMockResposne().subscribe((data) => {
      this.fareOptionsToUpgrades = [];
      data.forEach((item, index) => {
        item.isShowFareDetails = false;
        item.selectedFareType = "";
        item.showBtn = false;

        if (index == 0) {
          this.selectedFareOptions = item;
          this.selectedFareOptions.selectedFareType = this.selectedFareOptions.segments[0].fareFamily.name;
          this.selectedFareOptions.showBtn = true;
        } else {
          this.fareOptionsToUpgrades.push(item);
        }
      });
    });
  }

  ngOnInit() {}

  onFareDetials(item) {
    item.isShowFareDetails = !item.isShowFareDetails;
  }

  onSelectedFareRadioBtnClick(item) {
    item.showBtn=true;
    this.fareOptionsToUpgrades.forEach(fare=>{
      fare.showBtn=false;
    });
  }

  onRadioBtnClick(item) {
    this.selectedFareOptions.showBtn=false;
    this.fareOptionsToUpgrades.forEach(fare=>{
      fare.showBtn=false;
    });
    item.showBtn=true;
    
  }
}
