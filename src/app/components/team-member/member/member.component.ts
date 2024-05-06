import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  experience(exp:number){
    if (exp >= 10){
      return "blue"
    }else if (exp < 10 && exp >=5) {
      return "green"
    }else{return "red"}
  }


  constructor() { }
  @Input() chefsInput:any
  ngOnInit(): void {
  }

}
