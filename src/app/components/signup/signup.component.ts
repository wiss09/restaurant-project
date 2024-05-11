import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm !:FormGroup
user:any={}
avatar:any
cv:any
avatarPreview:any
cvPreview:any;
role:string=''
  constructor( private service : UserService , private router: Router) { }

  ngOnInit(): void {

    
    
  }
  selectAvatar(event:Event){
   const inputElement=event.target as HTMLInputElement
   if (inputElement && inputElement.files && inputElement.files.length>0) {
    this.avatar=inputElement.files[0]
   
    const reader = new FileReader();
      reader.onload = () => { this.avatarPreview = reader.result as string; };
      reader.readAsDataURL(this.avatar);

   }
  }
  selectCv(event:Event){
    const inputElement=event.target as HTMLInputElement
    if (inputElement && inputElement.files && inputElement.files.length >0) {
      this.cv = inputElement.files[0];

      const reader = new FileReader();
      reader.onload = () => { this.cvPreview = reader.result as string; };
      reader.readAsDataURL(this.cv);
    
      
    }
  }
  addUser(){
  
    if (this.role=='admin') {
      this.user.role=this.role
    }else if (this.role=='chef') {
      this.user.status='unacceptable'
      this.user.role=this.role

    }else{
      this.user.role='client'
    }
    this.user.cv=this.cv
    this.user.avatar=this.avatar
    this.service.signup(this.user , this.cv, this.avatar).subscribe((res)=>{
      alert (res.msg)})
      console.log(this.user);
  }
  selectRole(event:any){
 this.role=(event.target.value);
  console.log(this.role);
  
  }
}
