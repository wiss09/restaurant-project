import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userURL:string='http://localhost:3000/users'


  constructor(private httpClient : HttpClient) { }
  getAllUser(){
    return this.httpClient.get<{users:any}>(this.userURL)
  }
  signup(object:any , cv:File , avatar:File){
   const formData=new FormData()

   formData.append('avatar' , avatar);
   formData.append('cv' , cv);
   formData.append('firstName' ,object.firstName );
   formData.append('lastName' ,object.lastName );
   formData.append('email' ,object.email );
   formData.append('phone' , object.phone );
   formData.append('password' , object.password );
   formData.append('confirm' ,object.confirm );
   formData.append('role' ,object.role );
   formData.append('status' ,object.status );

    return this.httpClient.post<{msg:string}>(this.userURL+'/signup',formData)
  }
  login(object:any){
    return this.httpClient.post<{msg:string , token:any}>(this.userURL+'/login',object)
  }
}
