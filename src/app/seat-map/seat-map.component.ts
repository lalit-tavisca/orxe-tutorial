import { Component, OnInit, Input } from '@angular/core';
import { SeatMap } from '../models/seat-map.model';

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class SeatMapComponent implements OnInit {

  constructor() { }
  
  @Input() seatMap: SeatMap;
  
  ngOnInit() {
  }

}
