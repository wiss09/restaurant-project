import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { PlatsComponent } from './components/plats/plats.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AdminComponent } from './components/admin/admin.component';
import { SingleChefComponent } from './components/single-chef/single-chef.component';
import { SinglePlatComponent } from './components/single-plat/single-plat.component';

const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"signup" , component:SignupComponent},
  {path:"signup-admin" , component:SignupComponent},
  {path:"signup-chef" , component:SignupComponent},
  {path:"" , component:HomeComponent},
  {path:"plats" , component:PlatsComponent},
  {path:"chefs" , component:ChefsComponent},
  {path:"add-plat" , component:AddPlatComponent},
  {path:"add-chef" , component:AddChefComponent},
  {path:"administrator" , component:AdminComponent},
  {path:"single-chef/:id",component:SingleChefComponent},
  {path:"single-plat/:id",component:SinglePlatComponent},
  {path:"edit-chef/:id" , component:AddChefComponent},
  {path:"edit-plat/:id" , component:AddPlatComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
