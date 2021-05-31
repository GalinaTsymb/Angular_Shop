
import { Injectable } from '@angular/core';
import { Product} from '../product';
import { ReplaySubject} from 'rxjs';
import {ProductService} from './product.service';



@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  value = 1;
  inventorySubject$ = new ReplaySubject();
  getProd$          = new ReplaySubject();
  getCounter        = new ReplaySubject();

  constructor(private productService: ProductService) {
    this.getProd$.next(this.productService.getProducts());
  }

  // tslint:disable-next-line:typedef
  addToInventory(product: Product) {
    this.inventorySubject$.next(product);
    this.getCounter.next(this.value++);
  }
}
