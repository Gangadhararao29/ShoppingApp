import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //inject http client Object
  constructor(private hc:HttpClient) { }

  //create user
  createUser(userObj):Observable<any>{
    return this.hc.post("/user/createuser",userObj)
  }

  //login user
  loginUser(credObj):Observable<any>{
    return this.hc.post("/user/login",credObj)
  }
}
