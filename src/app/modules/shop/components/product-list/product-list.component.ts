import { Component, OnInit} from '@angular/core';
import {ObservableService} from '../../shared/services/observable.service';
import {Product} from '../../shared/product';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  productsList;
  countInCart;

  // tslint:disable-next-line:max-line-length
  constructor( private observableService: ObservableService) {}

  ngOnInit(): void {
    this.observableService.getProd$.subscribe( (product: Product) => {
      this.productsList = product;
    });
    console.log('product list', this.productsList);
    this.observableService.getCounter.subscribe((value) => {
      this.countInCart = value;
    });
  }

  // tslint:disable-next-line:typedef
  addToCart(product: Product) {
    this.productsList.map(item => {
      if (item.id === product.id){
        item.available--;
        item.quantityInCart++;
        this.observableService.addToInventory(item);
      }
    });
  }
}

