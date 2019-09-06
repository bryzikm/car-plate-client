import {Injectable} from '@angular/core';
import {UrlsService} from '../../shared/services/urls.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CarPlatesResponse, Filters} from './models/filters.model';
import {Observable} from 'rxjs';
import {CarPlate} from './models/car-plate.model';

@Injectable({
  providedIn: 'root'
})
export class CarPlateService {

  constructor(private httpClient: HttpClient) {
  }

  getCarPlates(filters: Filters): Observable<CarPlatesResponse> {
    let params = new HttpParams();

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        params = params.append(key, filters[key]);
      }
    });

    return this.httpClient.get<CarPlatesResponse>(`${UrlsService.CAR_PLATES}`, {params});
  }

  getCarPlateById(id: string): Observable<CarPlate> {
    return this.httpClient.get<CarPlate>(`${UrlsService.CAR_PLATES}/${id}`);
  }

  removeCarPlateById(id: string) {
    return this.httpClient.delete(`${UrlsService.CAR_PLATES}/${id}`);
  }

  addCarPlate(carPlate: CarPlate) {
    return this.httpClient.post(`${UrlsService.CAR_PLATES}`, {carPlate});
  }

  updateCarPlate(carPlate: CarPlate) {
    return this.httpClient.put(`${UrlsService.CAR_PLATES}`, {carPlate});
  }
}
