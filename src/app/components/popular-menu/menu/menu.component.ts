import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuInput:any
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  display(id:any){
    this.router.navigate([`single-plat/${id}`])
  }
}
