import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  userdata:any='';  
  usernotes='Enter your notes';
  userid:any='';
  updatemessage=false;
  
  constructor(private router:Router, private servsignup: SignupService, private routepmter:ActivatedRoute) { 
   //console.warn(this.routepmter.snapshot.params['id']);
}

  alsertclose(){
    this.updatemessage=false;
  }

  notesform = new FormGroup({
    userid: new FormControl(''),
    notes: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  get notes() { return this.notesform.get('notes') }
  

  updatenotes(){
    
    this.servsignup.updateusernotes(this.notesform.value).subscribe((records: any) => {
      console.warn(records);
      if(records.status==200){
        this.updatemessage=true;        
        setTimeout(() => this.alsertclose(), 3000);
        //this.router.navigateByUrl('/userpanel/'+this.userid);
        
      }
    });
  }

  



  ngOnInit(): void {    
    this.userid = localStorage.getItem('userid');
    if(this.userid!=null){
      this.servsignup.getrecordbyid(this.userid).subscribe((records: any) => {
      this.userdata = records.data;
      this.usernotes = records.data.notes;
      this.notesform.patchValue({
        userid: records.data.id,
        notes: records.data.notes
      });
    })
    }
    else{
      this.router.navigateByUrl('/');
    }

  }

}
