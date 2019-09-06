import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  private static readonly API_URL: string = environment.apiUrl;

  // CAR PLATES
  public static readonly CAR_PLATES = `${UrlsService.API_URL}/car-plates`;
}
