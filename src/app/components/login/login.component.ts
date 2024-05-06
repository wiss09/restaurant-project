import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  error: string = ''
  login() {
    this.service.login(this.loginForm.value).subscribe((res) => {

      if (res.token) {



        sessionStorage.setItem('DingoToken', res.token)
        let role: any = jwtDecode(res.token)
        if (role == 'admin') {
          this.router.navigate(['administrator'])
        } else {
          this.router.navigate([''])
          this.error = ''
          alert(res.msg)
        }
        } else { this.error = 'Check your Email and Password' }




      })
  }
  constructor(
    private inputBuilder: FormBuilder,
    private service: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.inputBuilder.group({
      email: [''],
      password: ['']
    })
  }

}
