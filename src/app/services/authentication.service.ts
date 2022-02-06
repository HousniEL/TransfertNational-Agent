
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Agent } from '../../Models/agent';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient,private router : Router) { }

  baseUrl :string= "https://ensa-api-transfer.herokuapp.com/api_agent/";

  login(AgentDetail : any) : Observable<any>{
      return this._http.post<any>(this.baseUrl + "login",AgentDetail);
  }


  Logout(){
    window.localStorage.clear();
    window.location.reload();
  }


  isLoggedIn() {
    let token = localStorage.getItem('token');
    if(!token){
      return false;
    }else return true;
  }

  
  
  getCurrentUser():Observable<Agent>{
    return this._http.get<Agent>(this.baseUrl+"me");
  }


}
