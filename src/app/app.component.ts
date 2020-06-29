import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  onCountUpdate(count){
    console.log(count);
  }

  updated(data){
    console.log(data);
  }
}
