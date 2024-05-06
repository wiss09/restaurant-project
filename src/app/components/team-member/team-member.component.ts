import { Component, Input, OnInit } from '@angular/core';
import { chefsTab } from 'src/app/global';
import { ChefsService } from 'src/app/services/chefs.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {
  chefsTab:any
  constructor(private  service : UserService) { }
  
  ngOnInit(): void {
    this.service.getAllUser().subscribe((data)=> {
      this.chefsTab=data.users
      console.log(this.chefsTab);
      
    })
  }

}
