import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  @Input() background: string = "{background:'url(\'../../assets/img/seat_booked.png\') no-repeat center'}";

  constructor() { }

  ngOnInit() {
  }

}
