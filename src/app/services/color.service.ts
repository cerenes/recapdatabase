import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44320/api/colors/';

  constructor(private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }
  add(color:Color): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add", color)
  }
  getColorById(colorId: number): Observable<SingleResponseModel<Color>> {
    let newPath = this.apiUrl + 'getbyid?id=' + colorId;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
 }
 update(color: Color): Observable<ResponseModel> {
  return this.httpClient.put<ResponseModel>(this.apiUrl, color);
}
}