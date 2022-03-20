import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

private approvalStageMessage = new Subject<any>();
teachermessage$ = this.approvalStageMessage.asObservable();

sendMessage(message: string) {
this.approvalStageMessage.next(message);
console.warn(message);
}
  
  constructor( private gethttp : HttpClient, ) { }

  listurl='http://127.0.0.1/notes/?uname=';
  idurl='http://127.0.0.1/notes/?uid=';

  getrecord(uname:any)
  {
    this.listurl=this.listurl+uname;
    return this.gethttp.get(this.listurl);
  }

  getrecordbyid(uid:any)
  {
    this.idurl=this.idurl+uid.id;
    return this.gethttp.get(this.idurl);
  }

  posturl='http://127.0.0.1/notes/';


  enrolluser(user:any){

    //console.warn(user['user_name']);

    return this.gethttp.post<any>(this.posturl,user);

  }

  updateusernotes(notes:any){
    //console.warn(notes);
    return this.gethttp.put<any>(this.posturl, notes) 
  }

}
