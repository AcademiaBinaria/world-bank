import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Country } from '../shared/models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  public getAll$(): Observable<Country[]> {
    const url = `${environment.url}/country`;
    return this.http.get<any>(url).pipe(map(apiArray => apiArray.map(item => ({ ...item, region: item.region.value }))));
  }
}
