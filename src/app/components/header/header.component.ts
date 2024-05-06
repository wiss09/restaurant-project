import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 isLogged(){
  let token:any=sessionStorage.getItem('DingoToken');
  if (token) {
   
      this.user=jwtDecode(token)
      // console.log(this.user)
    }
    return !!token
 }
   logout(){
    sessionStorage.removeItem('DingoToken');
    this.router.navigate([''])
   }

}
