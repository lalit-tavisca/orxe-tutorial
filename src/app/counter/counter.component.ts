import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() count = 5;
  @Output() countChanged = new EventEmitter<number>();
  @Output() jsonUpdated = new EventEmitter<any>();
  numbers: Array<number> = [];

  constructor() { }

  ngOnInit() {
  }

  onDecrement(){
    this.count--;
    this.countChanged.next(this.count); 
    this.jsonUpdated.next({
      isEnabled: true,
      isProvided: false
    });
  }

  onIncrement(){
    this.count++;
    this.countChanged.emit(this.count);
  }

  addNumber(){
    this.numbers.push(Math.floor((Math.random() * 10)));
  }
}
