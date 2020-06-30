import { Component, OnInit, Input } from "@angular/core";
import { SeatMapService, SeatMapResponse, Cabins } from "../seat-map.service";

@Component({
  selector: "app-seat-map",
  templateUrl: "./seat-map.component.html",
  styleUrls: ["./seat-map.component.scss"],
})
export class SeatMapComponent implements OnInit {
  seatMapResponse: SeatMapResponse;

  @Input()
  originAirportCityName: string;

  @Input()
  originAirportCode: string;

  @Input()
  destinationAirportCityName: string;

  @Input()
  destinationAirportCode: string;

  @Input()
  airlineName: string;

  @Input()
  flightNumber: string;

  @Input()
  airCraftName: string;

  @Input()
  airCraftNumber: string;

  @Input()
  date: string;

  private columnCharacterCounter = 0;

  dateDay: string;
  dateMonth: string;
  dateNumber: number;
  cabinLayoutList: Array<CabinLayout>;
  constructor(seatMapService: SeatMapService) {
    this.seatMapResponse = seatMapService.getSeatMap();
    this.cabinLayoutList = this.getCabinLayout();
    console.log(this.cabinLayoutList);
  }

  private getCabinLayout() {
    let cabinLayoutList = new Array<CabinLayout>();
    this.seatMapResponse.cabins.forEach((cabin) => {
      let layout = new CabinLayout();
      layout.cabinLocation = cabin.location;
      layout.cabinLayout = new Array<string>();
      console.log(cabin.columns.length);
      for (let index = 0; index < cabin.columns.length; index++) {
        switch (index) {
          case 0:
            layout.cabinLayout.push("A");
            break;
          case 1:
            layout.cabinLayout.push("B");
            break;
          case 2:
            layout.cabinLayout.push("C");
            break;
          case 3:
            layout.cabinLayout.push("D");
            break;
          case 4:
            layout.cabinLayout.push("E");
            break;
          case 5:
            layout.cabinLayout.push("F");
            break;
        }
        if (
          cabin.columns[index].type === "aisle" &&
          cabin.columns[index + 1].type === "aisle"
        ) {
          layout.cabinLayout.push("|");
        }
      }
      cabinLayoutList.push(layout);
    });
    return cabinLayoutList;
  }

  getLayout(cabinLoaction: string) {
    let layout = this.cabinLayoutList.find(
      (c) => c.cabinLocation === cabinLoaction
    );
    return layout;
  }

  isLayoutCorrect(cabinLoaction: string, columnCharacter: string) {
    let layout = this.cabinLayoutList.find(
      (c) => c.cabinLocation === cabinLoaction
    );
    if (layout === undefined) {
      return "";
    } else {
      let columnCharacter = layout.cabinLayout.find(
        (column) => column === columnCharacter
      );
      return columnCharacter;
    }
  }
  ngOnInit() {}
}

export class CabinLayout {
  cabinLocation: string;
  cabinLayout: Array<string>;
}
