import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { PopService } from '../pop.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css'],
  providers: [PopService]
})
export class BeautyComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private popsrc: PopService) {  }
 
  openDialog(){
    this.dialogRef.open(PopUpComponent)
  }

  ngOnInit(): void {
   
    
  }

products =
[
  {id:1, name: 'Oil free Advance Acne face wash', productImage: "/assets/beauty-5.webp", price: '$44'},
  {id:2, name: 'GARNIER SKINACTIVE', productImage: "/assets/beauty-3.png", price: '$102'},
   {id:3, name: 'GARNIER Jelly Water with Charcoal', productImage: "/assets/beauty-4.jpg", price: '$44'}
]

productstwo =
[
  {id:1, name: 'Pore Refining', productImage: "/assets/beauty-2.webp", price: '$70'},
  {id:1, name: 'Carbo Jet', productImage: "/assets/beauty-10.png", price: '$102'},
  {id:1, name: 'Volume Builder', productImage: "/assets/beauty-6.jpg", price: '$200'}
]
 
// productsthree =
// [
//   {id:1, name: 'Canna B pore perfecting', productImage: "/assets/beauty-7.jpg", price: '$20'},
//   {id:1, name: 'Melon Repumpng musk', productImage: "/assets/beauty-8.jpg", price: '$102'},
//   {id:1, name: 'Brighting mask', productImage: "/assets/beauty-9.jpg", price: '$44'}
// ]
 
}




