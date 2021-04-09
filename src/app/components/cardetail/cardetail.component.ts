import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carImage.service';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CarDetailComponent implements OnInit {
  carImages!: CarImage[];
  cardetails: CarDetail[]=[];
  dataLoaded: boolean = false;

  constructor(private carImageService: CarImageService, private carService: CarService, private activatedRoute: ActivatedRoute) { }

  
  ngOnInit(): void {
    console.log(this.cardetails);
    console.log(this.carImages);
    this.activatedRoute.params.subscribe(params => {
      this.getCarDetailsById(params["Id"]);
      this.getCarImagesByCarId(params["Id"]);
    })
    
  }

  
  getCarDetailsById(Id:number){
    this.carService.getCarDetailsById(Id).subscribe((response)=>{
      this.cardetails=response.data;
      this.dataLoaded=true;
    })
  }
  getCarImagesByCarId(id: number) {
    this.carImageService.getCarImagesByCarId(id).subscribe((response) => {
      this.carImages = response.data;
    })
  }

  setImage() {

    for (let i = 0; i < this.carImages.length; i++) {
      const carImage = this.carImages[i];
      if (carImage.imagePath) {
        return environment.staticFilesUrl + carImage.imagePath;
      }
    }
    return environment.staticFilesUrl + "/images/bos.jpg";
  
}
}