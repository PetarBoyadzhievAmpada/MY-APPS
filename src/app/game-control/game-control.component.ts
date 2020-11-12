import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  mynumber;
  @Output() incrementingNumber= new EventEmitter <number>();
  myIncrementingNumber=0;
  constructor() { }

  ngOnInit(): void {
  }
  onStart(){
    this.mynumber= setInterval(()=>{
      this.incrementingNumber.emit(this.myIncrementingNumber++)
    },1000);
  }

  onStop(){
   clearInterval(this.mynumber);
  }
  

}
