import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44320/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let loginPath = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(loginPath, loginModel);
 }
  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    let registerPath = this.apiUrl + 'register';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(registerPath, registerModel);
 }

  update(customer: Customer): Observable<SingleResponseModel<TokenModel>> {
    let updatePath = this.apiUrl + 'update';
    return this.httpClient.put<SingleResponseModel<TokenModel>>(updatePath, customer);
 }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
    
  }
}
