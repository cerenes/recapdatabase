import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiUrl = 'https://localhost:44320/api/cards';

  constructor(private httpClient: HttpClient) { }
  getCard():Observable<ListResponseModel<Card>>{
    return this.httpClient.get<ListResponseModel<Card>>(this.apiUrl)
  }
  addCard(card: Card): Observable<ResponseModel> {
    let newPath = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(newPath, card);
  }

  getByCustomerId(customerId: number): Observable<ListResponseModel<Card>> {
    let getByCustomerPath = this.apiUrl + "getbycustomerId?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<Card>>(getByCustomerPath);
  }
  updateCard(card: Card): Observable<ResponseModel> {
    let newPath = this.apiUrl + "payments/update";
    return this.httpClient.put<ResponseModel>(newPath, card);
  }
  isCardExist(card:Card):Observable<ResponseModel>{
    let newPath = this.apiUrl + "iscardexist";
    console.log(card);
    return this.httpClient.post<ResponseModel>(newPath,card);
  }
  getCardByNumber(cardNumber:string):Observable<ListResponseModel<Card>>{
    let newPath = this.apiUrl + "getbycardnumber?cardNumber=" + cardNumber;
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }

}
