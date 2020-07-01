import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {
  isMixAndMatch = false;
  fareAttributes = [ {
    brandAttribute: 'Carry-on-bag',
    brandAttributeValue: 'available'
},
{
    brandAttribute: 'Checked Baggage',
    brandAttributeValue: 'available-for-charge'
},
{
    brandAttribute: 'Ticket Change',
    brandAttributeValue: 'not-Offered'
},
{
    brandAttribute: 'Ticket Exchange',
    brandAttributeValue: 'not-Offered'
}];

  journeyType  = 10;
  showFirstDiv = true;
  showSecondDiv = false;
  // 0 - one way
  // 1 - round trip
  // 2 - multi city
  // other - unknown  
  constructor() { }

  ngOnInit() {
  }

  toggleMixAndMatch(){
    this.isMixAndMatch = !this.isMixAndMatch;
    console.log(this.isMixAndMatch); 
  }
}
