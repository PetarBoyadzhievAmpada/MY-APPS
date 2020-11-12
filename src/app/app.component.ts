import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assigment4';
  oddNumbers = [];
  evenNumbers = [];

  onIncrement(myIncrementingNumber:number){
  if(myIncrementingNumber % 2 === 0 ){
    this.evenNumbers.push(myIncrementingNumber);
    }
    else{
      this.oddNumbers.push(myIncrementingNumber);
    }
  }  
  }
  
  
  
  



