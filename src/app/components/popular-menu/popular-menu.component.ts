import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { platsTab } from 'src/app/global';
import { PlatsService } from 'src/app/services/plats.service';
@Component({
  selector: 'app-popular-menu',
  templateUrl: './popular-menu.component.html',
  styleUrls: ['./popular-menu.component.css']
})
export class PopularMenuComponent implements OnInit {
 platsTab:any
 search:any;
 searchForm!:FormGroup
  constructor(private service:PlatsService,private router:Router) { }

filter(){
 this.service.searchPlat(this.search).subscribe((data)=>{
  this.platsTab=data.searchTab
  console.log(data.searchTab)
 })
}
  ngOnInit(): void {
    this.service.getAllPlat().subscribe((data)=>{
      this.platsTab=data.table
    })
  }
  
}
