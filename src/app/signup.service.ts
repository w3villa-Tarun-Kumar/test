import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor( private gethttp : HttpClient, ) { }

  listurl='http://127.0.0.1/notes/?uname=';

  getrecord(uname:any)
  {
    this.listurl=this.listurl+uname;
    return this.gethttp.get(this.listurl);
  }

  posturl='http://127.0.0.1/notes/';


  enrolluser(user:any){

    //console.warn(user['user_name']);

    return this.gethttp.post<any>(this.posturl,user);

  }

}
