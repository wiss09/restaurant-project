import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { chefsTab, platsTab } from 'src/app/global';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-single-plat',
  templateUrl: './single-plat.component.html',
  styleUrls: ['./single-plat.component.css']
})
export class SinglePlatComponent implements OnInit {
platObject:any
platsTab:any=platsTab
  constructor(private activatedRoute:ActivatedRoute , private platService:PlatsService) { }

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.params['id']
    this.platService.getPlatByID(id).subscribe((response)  =>{
     this.platObject=response.plat
    })
  }

}
