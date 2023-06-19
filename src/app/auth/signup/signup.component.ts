import { HttpClient } from '@angular/common/http';
import { Component  , OnInit} from '@angular/core';
import {FormGroup ,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
constructor (private http : HttpClient ,
  private router : Router ,
  private toastr : ToastrService) {}
signupForm !: FormGroup ;
signupuser !:any ;
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
  this.signupuser = this.signupForm.value.firstName
  this.http.post<any>('http://localhost:8080/signup' ,this.signupForm.value).subscribe(
     (data ) => {
      this.toastr.success(this.signupuser ,'welcome') ;
this.signupuser.reset();
this.router.navigate(['/login'])
    },
    
  )

}
}
