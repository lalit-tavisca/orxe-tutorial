import { Component, OnInit } from '@angular/core';
import { SeatMapService } from '../service/seatmap.service';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class SeatMapComponent implements OnInit {

  constructor(private seatMapService: SeatMapService) { }
  
  ngOnInit() {
  }

}
