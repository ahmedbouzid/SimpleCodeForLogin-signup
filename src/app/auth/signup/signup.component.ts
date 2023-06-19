import { Component  , OnInit} from '@angular/core';
import {FormGroup ,FormControl} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

signupForm !: FormGroup ;

ngOnInit(): void {
  this.signupForm = new FormGroup ({
    'firstName' : new FormControl() ,
    'lastName' : new FormControl() ,
    'email': new FormControl() ,
    'password' : new FormControl() ,
    'phone' : new FormControl()
  })
}
signup(data : FormGroup){
  console.log(this.signupForm.value);

}
}
