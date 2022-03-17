import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private servsignup: SignupService) { }

  loginform = new FormGroup({
    username: new FormControl('', [Validators.minLength(4), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  get username() { return this.loginform.get('username') }
  get password() { return this.loginform.get('password') }

  uname = '';
  pswd = '';
  userid = '';
  errmsg = false;

  onSubmit() {
    this.uname = this.loginform.value.username;
    this.pswd = this.loginform.value.password;
    this.servsignup.getrecord(this.uname).subscribe((records: any) => {

      if (this.pswd == records.data.user_password) {
        this.userid = records.data.id;
        this.router.navigateByUrl('/userpanel/' + this.userid);

      }
      else {
        this.errmsg = true;
      }
    });
  }


  /* -----------Signup Form ---------*/


  signupform = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    user_password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    user_email: new FormControl('', [Validators.required, Validators.email]),
    title: new FormControl('title'),
    //phone: new FormControl('', [Validators.required, Validators.minLength(10)]),

  })

  signup() {
    this.servsignup.enrolluser(this.signupform.value).subscribe((records: any) => {
      //console.warn(records.data.id);
      if(records.status==200){
        this.userid = records.data.id;
        this.router.navigateByUrl('/userpanel/'+this.userid);
      }
    });
  }
  ngOnInit(): void {

  }

}
