import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefsService } from 'src/app/services/chefs.service';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  binding: string = 'Add'
  platForm!: FormGroup
  myPattern: string = "^(?=.*[0-9]).{1,5}$";
  verifiedSelector:any;
  chefs:any
  chefId:any
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private inputsBuilder: FormBuilder,
    private platService: PlatsService,
    private chefService : ChefsService) { }

  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.paramMap.get('id')
    this.verifiedSelector=id
    if (id) {
      this.platService.getPlatByID(id).subscribe((response) => {
        this.platForm = this.inputsBuilder.group({
          name: [response.plat.name, [Validators.required]],
          price: [response.plat.price, [Validators.required, Validators.pattern(this.myPattern)]],
          description: [response.plat.description, [Validators.required]]
        })
        this.binding = 'Edit'
      })
    }
        
    this.platForm = this.inputsBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(this.myPattern)]],
      description: ['', [Validators.required]]
    })
    
    
    this.chefService.getAllChef().subscribe((res)=>{
      this.chefs=res.table
    })


  }


  validate() {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id) {
      this.platForm.value['id']=id
      this.platService.EditPlat(this.platForm.value).subscribe((response) => {
        alert (response.isUpdated)
        this.router.navigate(['administrator'])
      })
    } else {
      this.platForm.value.chefId=this.chefId
      console.log(this.platForm.value)
      this.platService.addPlat(this.platForm.value).subscribe((response) => {
        alert(response.msg)
        
      })

    }
  }

  selectChef(event:any){
   this.chefId= event.target.value
  }
}
