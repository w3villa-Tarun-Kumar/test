import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { } 
  
  loginform=new FormGroup({
    username: new FormControl('', [Validators.minLength(4),Validators.required]),    
    password: new FormControl('', [Validators.required,Validators.minLength(8)])
  })

  get username() {return this.loginform.get('username')}
  get password() {return this.loginform.get('password')}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginform.value);
    this.router.navigateByUrl('/userpanel');
  }

  signupform=new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    useremail: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),

  })

  signup() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signupform.value);

    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
  }

}
