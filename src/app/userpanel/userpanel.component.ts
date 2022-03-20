import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  userdata:any='';  
  usernotes='Enter your notes';
  //this.servsignup.getrecord(this.uname).subscribe((records: any) => {


  constructor(private servsignup: SignupService, private routepmter:ActivatedRoute) { 
    
  // console.warn(this.routepmter.snapshot.params);
  this.servsignup.getrecordbyid(this.routepmter.snapshot.params).subscribe((records:any) =>{
  this.userdata=records.data;
  this.usernotes=records.data.notes;
   })

  }

  notesform = new FormGroup({
    userid: new FormControl('1'),
    notes: new FormControl(this.usernotes, [Validators.required, Validators.minLength(4)])
  })

  get notes() { return this.notesform.get('notes') }
  

  updatenotes(){
    
    this.servsignup.updateusernotes(this.notesform.value).subscribe((records: any) => {
      console.warn(records);
      if(records.status==200){
        
        //this.router.navigateByUrl('/userpanel/'+this.userid);
        
      }
    });
  }

  



  ngOnInit(): void {

  }

}
