import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { chefsTab } from 'src/app/global';
import { ChefsService } from 'src/app/services/chefs.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
chefForm !: FormGroup;
chef:any = {}
chefsTab:any=chefsTab
binding:string ='Add'
 ChefForm(){
  let id = this.activatedRoute.snapshot.paramMap.get('id')
  if (id) {
    this.chefService.EditChef(this.chef).subscribe((response)=>{
          alert (response.msg)
       })
       this.router.navigate([`administrator`]) 
  }else{
    this.chefService.addChef(this.chef).subscribe((response)=> {
      this.chef=''
     this.router.navigate([`administrator`])
  })
  }
  
}
 
constructor(private activatedRoute:ActivatedRoute ,
     private router:Router,
     private chefService:ChefsService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
   if (id) {
    this.chefService.getChefByID(id).subscribe((response) =>{
    this.chef=response.chef
      this.binding='Edit'
       
    })
   }
   
  }
    
   
  }


