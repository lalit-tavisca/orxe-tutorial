import { Component, OnInit, Input } from "@angular/core";
import {
  SeatMapService,
  SeatMapResponse,
  Cabins,
  Seat,
} from "../seat-map.service";

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

  dateDay: string;
  dateMonth: string;
  dateNumber: number;
  cabinLayoutList: Array<CabinLayout>;
  data2 = [1];

  private seatCounter = 0;
  private maxSeats = 0;
  constructor(seatMapService: SeatMapService) {
    this.seatMapResponse = seatMapService.getSeatMap();
    this.cabinLayoutList = this.getCabinLayout();
    console.log(this.cabinLayoutList);
  }

  private getCabinLayout() {
    let cabinLayoutList = new Array<CabinLayout>();
    this.seatMapResponse.cabins.forEach((cabin) => {
      let layout = new CabinLayout();
      layout.seatCounter = 0;
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
      layout.maxSeats = cabin.seats.length;
      let seatsLayout = new Array<Array<Seat>>();
      for (let seatIndex = 0; seatIndex < layout.maxSeats; ) {
        let seats = new Array<Seat>();
        for (
          let layoutIndex = 0;
          layoutIndex < layout.cabinLayout.length - 1;
          layoutIndex++
        ) {
          seats.push(cabin.seats[seatIndex]);
          seatIndex++;
          console.log(seats);
          if (seatIndex >= layout.maxSeats) break;
        }
        seatsLayout.push(seats);
        if (seatIndex >= layout.maxSeats) break;
      }
      layout.seats = seatsLayout;
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

  shouldAddSeparator(cabinLoaction: string, columnCharacter: string) {
    let layout = this.cabinLayoutList.find(
      (c) => c.cabinLocation === cabinLoaction
    );
    if (layout === undefined) {
      return false;
    } else {
      let columnCharacterIndex = layout.cabinLayout.indexOf(columnCharacter);
      if (columnCharacterIndex === layout.cabinLayout.length) return false;
      else if (layout.cabinLayout[columnCharacterIndex + 1] === "|")
        return true;
      return false;
    }
  }

  isAvailable(seat: Seat) {
    return seat.occupationStatus === "available";
  }
  isUnavailable() {}
  isAccessible(seat: Seat) {
    return seat.occupationStatus === "protected";
  }
  isPremium(seat: Seat) {
    return seat.occupationStatus === "reserved";
  }
  closeSeatMap($event) {
    $event.stopPropagation();
    console.log("Close seatmap");
  }

  selectSeat($event) {
    $event.stopPropagation();
    console.log("select seat");
    let isSelected = $event.target.classList.contains("seat-selected");
    if (!isSelected) $event.target.classList.add("seat-selected");
    else $event.target.classList.remove("seat-selected");
    console.log($event.target.classList);
  }
  ngOnInit() {}
}

export class CabinLayout {
  cabinLocation: string;
  cabinLayout: Array<string>;
  maxSeats: number;
  seatCounter: number;
  seats: Array<Array<Seat>>;
}
