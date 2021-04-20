import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject = new Subject()
  subNum = new Subject()

 
  constructor() { }

  number=0;

    sendMsg(product){
      console.log(product)
      this.subject.next(product)
    }

    getMsg(){
      return this.subject.asObservable()
    }

    getCartItemLength(array1=[]){
      this.subNum.next(array1)
      // this.number= array1.length;
    }

    cartsItemLength(){
      return this.subNum.asObservable();
    }
}


