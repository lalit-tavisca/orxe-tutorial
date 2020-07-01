import { Component, OnInit, Input } from '@angular/core';
import { SeatMapService } from '../service/seatmap.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  @Input() background: string = "{background:'url(\'../../assets/img/seat_booked.png\') no-repeat center'}";

  constructor(private seatMapService: SeatMapService) { }

  ngOnInit() {
    console.log(this.seatMapService.seatmapResponse);
  }

}
