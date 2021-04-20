import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path:"home", 
component:HomeComponent,
children:[
  {
    path:"cart", component: CartComponent
  }
]
},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},

{path:'', redirectTo:'/home',pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
