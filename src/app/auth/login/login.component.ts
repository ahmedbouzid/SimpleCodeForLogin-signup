import { Component , OnInit} from '@angular/core';
import {FormGroup ,FormControl} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
data: any;
  constructor () {}
loginForm !: FormGroup |any ;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'firstName' : new FormControl() ,
      'password' : new FormControl()
    })
  }

  login(data :FormGroup|any) {
    console.log(this.loginForm.value);

  }
}
