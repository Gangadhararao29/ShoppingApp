import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [];
  // {
  //   productName:"Samsung S20",
  //   qty:1,
  //   age:1,
  // }
  //];
  cardTotal = 0;

  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    this.cartservice.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productName == product.name) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productName: product.name,
        qty: 1,
        age: product.age,
      });
      // console.log(this.cartItems);
      this.cartservice.getCartItemLength(this.cartItems);
    }
    // console.log(product)
  }

  deleteCartItem(name: string) {
    console.warn('this is from Cart Items', this.cartItems);
    console.log('this is from name', name);
    this.cartItems = this.cartItems.filter((el) => {
      if(el.qty>1)
      {
        console.log("el.qty",el.qty)
        el.qty--;
        return true;
      }
      else{
      return el.productName !== name;
    }
  });
  }
}
