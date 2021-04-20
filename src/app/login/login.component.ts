import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us : UserService, private router :Router) { }

  ngOnInit(): void {
  }

  onSubmit(formRef){
    let credObj=formRef.value;
    console.log(credObj)

    //if admin
    if(credObj.usertype == "admin"){
      
    }

    //if user
    if(credObj.usertype == "user"){

      delete credObj.usertype;
      this.us.loginUser(credObj).subscribe(
        res=>{
          if(res['message']=="Username not found"){
            alert("Incorrect Username")
            formRef.reset();
          }
          else if(res["message"]=="Invalid password"){
            alert("Please enter correct password")
            formRef.reset();
          }
          else if(res['message']=="login successful"){
            localStorage.setItem("token",res["token"])
            localStorage.setItem("userName",res["userName"])
            this.router.navigateByUrl("/home")
        }
        err=>{
              alert("Something went wrong in user login")
              console.log(err)
        }
    })
  }

}
}