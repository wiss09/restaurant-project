import { Component, OnInit } from '@angular/core';
import { chefsTab } from 'src/app/global';
import { ChefsService } from 'src/app/services/chefs.service';
@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  chefsTab:any
  constructor(private  service : ChefsService) { }

  ngOnInit(): void {
  
  }

}
