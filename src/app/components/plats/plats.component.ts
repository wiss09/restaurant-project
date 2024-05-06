import { Component, OnInit } from '@angular/core';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {

  constructor(private service:PlatsService) { }

  ngOnInit(): void {
   this.service.getAllPlat().subscribe((response)=>{
    
   })
  }

}
