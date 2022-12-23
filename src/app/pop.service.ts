import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopService {

  constructor() { }

 productsSerc = [
    { name: 'Oil free Advance Acne face wash', productImage: "/assets/beauty-5.webp", price: '$44'},
    { name: 'GARNIER SKINACTIVE', productImage: "/assets/beauty-3.png", price: '$102'},
     { name: 'GARNIER Jelly Water with Charcoal', productImage: "/assets/beauty-4.jpg", price: '$44'}
  ]
}
