
import { Injectable } from '@angular/core';
import { Product} from '../product';
import { ReplaySubject} from 'rxjs';
import {ProductService} from './product.service';



@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  value = 0;
  inventorySubject$ = new ReplaySubject();
  getProd$          = new ReplaySubject();
  getCounter        = new ReplaySubject();

  constructor(private productService: ProductService) {
    this.getProd$.next(this.productService.getProducts());
  }

  // tslint:disable-next-line:typedef
  addToInventory(product: Product) {
    this.inventorySubject$.next(product);
    this.value++;
    this.getCounter.next(this.value);
  }

  // tslint:disable-next-line:typedef
  deleteToInventory(product: Product){
    this.value--;
    this.getCounter.next(this.value);
    this.inventorySubject$.next(product);
  }
}
