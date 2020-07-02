import { Component, OnInit, Input } from '@angular/core';
import { Seat } from '../models/seat.model';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  constructor() { }

  @Input() seat: Seat;

  ngOnInit() {
  }
}