import { Component, OnInit, Input } from '@angular/core';
import { SeatMapFlightDetails } from '../models/seat-map-flight-details.model';

@Component({
  selector: 'app-seat-map-flight-details',
  templateUrl: './seat-map-flight-details.component.html',
  styleUrls: ['./seat-map-flight-details.component.scss']
})
export class SeatMapFlightDetailsComponent implements OnInit {

  constructor() { }

  @Input() flightDetails: SeatMapFlightDetails; 

  ngOnInit() {
  }

}