import { Component, OnInit } from '@angular/core';
import {Product} from '../../shared/product';
import {ObservableService} from '../../shared/services/observable.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {

  countInCart;
  cartItems: Product[] = [];
  productsList;
  totalCart = 0;

  constructor(private observableService: ObservableService ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.observableService.inventorySubject$.subscribe( (product: Product) => {
      if (this.cartItems.find(prod => prod.id === product.id)){
        return;
      }
      this.cartItems.push(product);
    });

    this.observableService.getCounter.subscribe((value) => {
      this.countInCart = value;
    });
    this.observableService.getProd$.subscribe( (product: Product) => {
      this.productsList = product;
    });
    this.updatePlusTotalCart();
  }

  // tslint:disable-next-line:typedef
  plus(product){
    this.totalCart = 0;
    this.productsList.map(item => {
      if (item.id === product.id){
        item.available--;
        item.quantityInCart++;
        this.observableService.addToInventory(item);
        this.updatePlusTotalCart();
      }
    });
  }

  // tslint:disable-next-line:typedef
  minus(product){
    this.productsList.map((item) => {
      if (item.id === product.id){
        item.available++;
        item.quantityInCart--;
        this.observableService.deleteToInventory(item);
        if (item.quantityInCart <= 0 && this.cartItems.find(it => it.id === item.id)){
          const index = this.cartItems.indexOf(this.cartItems.find(it => it.id === item.id));
          this.cartItems.splice(index, 1);
        }
        this.updateMinusTotalCart(item.price);
      }
    });

  }

  // tslint:disable-next-line:typedef
  updatePlusTotalCart() {
    this.cartItems.forEach(item => {
      this.totalCart += (item.quantityInCart * item.price);
    });
  }

  // tslint:disable-next-line:typedef
  updateMinusTotalCart(price) {
    this.totalCart -= price;
  }
}

