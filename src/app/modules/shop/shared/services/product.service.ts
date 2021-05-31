import { Injectable } from '@angular/core';
import { Product } from '../product';
import products from '../../../../../assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsList: Product[] = products;
  constructor() { }

  getProducts(): Product[]{
    return this.productsList;
  }
}
