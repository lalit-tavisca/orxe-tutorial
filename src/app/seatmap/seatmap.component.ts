import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { SeatmapService } from '../services/seatmap-service';


@Component({
  selector: "app-seatmap",
  templateUrl: "./seatmap.component.html",
  styleUrls: ["./seatmap.component.scss"],
})
export class SeatmapComponent implements OnInit {
  seatmap: any;
  colunms: any;

  header: any;
  rowData = [];
  midCount = 0;

  constructor(private seatmapService: SeatmapService) {
    this.seatmapService.getSeatMapMockResposne().subscribe((data) => {
      this.seatmap = data;
      this.getColunmList(this.seatmap.seatMap.cabins[0].columns);
      this.generateData(data);
    });
  }
  ngOnInit() {}

  getColunmList(data) {
    this.colunms = data;
    this.midCount = this.colunms.length / 2;
    this.colunms.splice(this.midCount, 0, "");
  }
  getClass(seat) {
    if (seat.occupationStatus == "reserved") return "unavailable";
    else if (seat.occupationStatus == "available") return "premium";
    else if (seat.occupationStatus == "empty") return "accessible";
    else return "";
  }

  generateData(data) {
    var rowNumber = this.getRowNumberList(data);

    rowNumber.forEach((rowNo) => {
      var result = data.seatMap.cabins[0].seats.filter(
        (x) => x.rowNumber == rowNo
      );
      result.splice(this.midCount, 0, { rowNumber: rowNo, show: true });
      this.rowData.push(result);
    });

    this.rowData;
  }

  getRowNumberList(data) {
    var result = [];

    data.seatMap.cabins[0].seats.forEach((element) => {
      if (result.indexOf(element.rowNumber) < 0) {
        result.push(element.rowNumber);
      }
    });
    return result;
  }
}
