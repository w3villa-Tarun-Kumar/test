import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

public approvalStageMessage = new Subject<any>();
private subject = new Subject<any>();

teachermessage$ = this.approvalStageMessage.asObservable();

sendMessage(message: any) {
  this.subject.next(message);
  //console.warn(message);
}

getMessage(): Observable<any> {
  return this.subject.asObservable();
}


listurl='http://127.0.0.1/notes/?uname=';
idurl='http://127.0.0.1/notes/?uid=';

constructor( private gethttp : HttpClient, ) {  }

 

  getrecord(uname:any)
  {
    return this.gethttp.get(this.listurl+uname);
  }

  getrecordbyid(uid:any)
  {
    return this.gethttp.get(this.idurl+uid);
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
