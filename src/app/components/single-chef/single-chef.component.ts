import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { chefsTab } from 'src/app/global';
import { ChefsService } from 'src/app/services/chefs.service';

@Component({
  selector: 'app-single-chef',
  templateUrl: './single-chef.component.html',
  styleUrls: ['./single-chef.component.css']
})
export class SingleChefComponent implements OnInit {
  chefsTab:any=chefsTab
  chefObject:any
  constructor(private activatedRoute:ActivatedRoute , private chefService:ChefsService) { }

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.params['id']
   this.chefService.getChefByID(id).subscribe((response)  =>{
    this.chefObject=response.chef
   })
  }

}
