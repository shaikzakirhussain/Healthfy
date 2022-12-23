import { Component, OnInit } from '@angular/core';
import { PopService } from '../pop.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(private popsrc: PopService) { }
  priceOne:boolean =false;
  priceTwo:boolean =true;
  priceThree:boolean =true;

  popproduct:{ name:string, productImage: string, price: number}[]=[];

  ngOnInit(): void {
    this.popproduct = this.popsrc.productsSerc;
  }
  selectionOne(){
    this.priceOne=!this.priceOne; 
    this.priceTwo=!this.priceTwo;
  }
  selectionTwo(){
    this.priceTwo=!this.priceTwo;
    this.priceOne=!this.priceOne;
  }




}
