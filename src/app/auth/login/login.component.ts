import { Component , OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms'
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
  }

  login(data :FormGroup|any) {
  }
}
