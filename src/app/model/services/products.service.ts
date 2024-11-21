import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private products: Iproducts[] = [
  { id:1, name: 'coturno', price: 50.0, description: 'The insole are confortable so you can', img: "./bolso.png" },
  { id:2, name: ' tenis preto ', price: 50.0, description: 'The insole are confortable so you can', img: "./tenis.png"  },
  { id:3, name: 'korn', price: 40.0, description: 'The insole are confortable so you can', img: "./allstar.png" },
];
getProducts(): Iproducts[]{
  return this.products;
}
}
