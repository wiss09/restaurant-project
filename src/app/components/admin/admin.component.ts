import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { chefsTab } from 'src/app/global';
import { platsTab } from 'src/app/global';
import { ChefsService } from 'src/app/services/chefs.service';
import { PlatsService } from 'src/app/services/plats.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  chefsTab:any 
  platsTab:any
  goToDisplayChef(id:any){
  this.router.navigate([`single-chef/${id}`])
  
  }
  goToDisplayPlat(id:any){
    this.router.navigate([`single-plat/${id}`])
   
    }
  goToEditChef(id:number){
    
     this.router.navigate([`edit-chef/${id}`])
  } 
  goToEditPlat(id:any){
    
    this.router.navigate([`edit-plat/${id}`])
 }   
  goToDeleteChef(id:any){
   
    this.chefService.deleteChef(id).subscribe((response)=>{
      alert (response.isDeleted)
    })
    this.chefService.getAllChef().subscribe((response) => {
      this.chefsTab=response.table
    }) 
    
  }
   goTodeletePlat(id:any){
    this.platService.deletePlat(id).subscribe((response)=>{
      alert(response.isDleted)
    })
    this.platService.getAllPlat().subscribe((response)=>{
      this.platsTab=response.table
    })

   }   
    
  constructor(private router:Router ,
     private chefService:ChefsService,
     private platService:PlatsService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.chefService.getAllChef().subscribe((response) => {
    this.chefsTab=response.table
    
  })
  this.platService.getAllPlat().subscribe((response) => {
    this.platsTab=response.table
    
  })
  
  }

}
