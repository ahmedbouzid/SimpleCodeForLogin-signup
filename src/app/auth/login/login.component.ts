import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import {FormGroup ,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
data: any;
  constructor ( private http : HttpClient ,
    private toast : ToastrService,
    private router : Router) {}
loginForm !: FormGroup |any ;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'firstName' : new FormControl() ,
      'password' : new FormControl()
    })
  }

  login(data :FormGroup|any) {
    console.log(this.loginForm.value);
    this.http.get<any>('http://localhost:8080/signup')
    .subscribe(res => {
      const user = res.find((a : any)=> {
        return a.firstName === this.loginForm.value.firstName && a.password === this.loginForm.value.password
      }) ;
      if (user) {
        const user = this.loginForm.value.firstName;
        this.toast.success('Login Succfully' , user) ;

        this.loginForm.reset()
        this.router.navigate(['/dashboard'])
      }
      else {
        this.toast.error(' icorrect Password or User name ')
      }
    } ,
    err => {
      console.log(err);

    }
    )


  }
}
