import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(id:number){
    let newPath = environment.apiUrl+"/carimage/getimagebycarid?Id="+id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}