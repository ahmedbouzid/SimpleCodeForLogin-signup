import { HttpClient } from '@angular/common/http';
import { Component  , OnInit} from '@angular/core';
import {FormGroup ,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'] ,
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class SignupComponent implements OnInit {
constructor (private http : HttpClient ,
  private router : Router ,
  private toastr : ToastrService) {}
signupForm !: FormGroup ;
signupuser !:any ;
ngOnInit(): void {
  this.signupForm = new FormGroup ({
    'id' : new FormControl(''),
    'firstName' : new FormControl() ,
    'lastName' : new FormControl() ,
    'email': new FormControl() ,
    'password' : new FormControl() ,
    'phone' : new FormControl()
  })
}
signup(signupForm : FormGroup){
  console.log(this.signupForm.value);
  this.signupuser = this.signupForm.value.firstName
  this.http.post<any>(`http://localhost:8080/signup `,this.signupForm.value ).subscribe(
     (data ) => {
  this.toastr.success('welcome' , this.signupuser) ;
  this.signupForm.reset();
  this.router.navigate(['/login'])

    },

  )

}
}
