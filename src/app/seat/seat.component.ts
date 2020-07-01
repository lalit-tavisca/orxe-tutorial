import { Component, OnInit } from '@angular/core';
import { SeatMapService } from '../service/seatmap.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  constructor(private seatMapService: SeatMapService) { }

  ngOnInit() {
    console.log(this.seatMapService.seatmapResponse);
  }

}
