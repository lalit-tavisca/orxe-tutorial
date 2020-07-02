import { Component, OnInit } from '@angular/core';
import { SeatMapService } from '../service/seatmap.service';

@Component({
  selector: 'app-seat-map-results-page',
  templateUrl: './seat-map-results-page.component.html',
  styleUrls: ['./seat-map-results-page.component.scss']
})
export class SeatMapResultsPageComponent implements OnInit {

  constructor(private seatMapService: SeatMapService) { }

  ngOnInit() {
  }

}
