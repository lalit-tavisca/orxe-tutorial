import { Component, OnInit, Input } from '@angular/core';
import { SeatType } from '../models/seat-type.model';
import { SeatTypeDetail } from '../models/seat-type-detail.model';

@Component({
  selector: 'app-seat-type-details',
  templateUrl: './seat-type-details.component.html',
  styleUrls: ['./seat-type-details.component.scss']
})
export class SeatTypeDetailsComponent implements OnInit {

  constructor() { }

  @Input() seatTypeDetails: SeatTypeDetail[];

  ngOnInit() {
  }

  getSeatType(seatType: SeatType) {
    switch(seatType) {
      case SeatType.Available: return "Available";
      case SeatType.Accessible: return "Accessible";
      case SeatType.Premium: return "Premium";
      case SeatType.Reserved: return "Reserved";
    }
  }

  getImgSrc(imgSrc: string) {
    return {
      background: 'url(\'../../assets/img/'+ imgSrc +'\') no-repeat center'
    };
  }
}