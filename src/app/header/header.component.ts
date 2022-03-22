import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  userlogin=false;
  constructor(private router: Router, private servsignup: SignupService) { }

  logoutme(){
    this.userlogin=false;
    localStorage.removeItem('userid');
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {

    
    if(localStorage.getItem('userid')){
      this.userlogin=true;
    }
    //console.warn(this.userlogin);

    this.servsignup.getMessage().subscribe((res) => {
      //console.warn("ddddddddddd", res.user_name);
      if(res.user_name!='')
      {
        this.userlogin=true;
      }
      else{
        this.userlogin=false;
        this.router.navigateByUrl('/');
      }
    })
  }

}
