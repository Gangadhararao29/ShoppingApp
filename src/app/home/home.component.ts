import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service' 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //image carousel links
  link1="https://rukminim1.flixcart.com/flap/1688/280/image/7cf77702b5539539.jpg?q=50";
  link2="https://rukminim1.flixcart.com/flap/1688/280/image/0c7cc4c7f7a07599.jpg?q=50";
  link3="https://rukminim1.flixcart.com/flap/1688/280/image/8411c3bdceea3fc5.jpg?q=50";

  productList=[];

  number=0;


  constructor(private productService: ProductService, private cartService: CartService) { 
    // this.number=this.cartService.cartsItemLength();
    // console.log("THIS IS FOR TESTING",this.cartService.cartsItemLength());
  
   this.cartService.cartsItemLength().subscribe((array1:any)=>{
     console.log("this is subscribale" ,array1.length)
     this.number= array1.length;
   })

  }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
  }

  handleAddToCart(product){
    this.cartService.sendMsg(product)
  }
}
