import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Country } from '../shared/models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  public getAll$(): Observable<Country[]> {
    const url = 'http://api.worldbank.org/V2/country?per_page=1000&format=json';
    return this.http.get<any>(url).pipe(
      map(res => res[1]),
      map(apiArray => apiArray.map(item => ({ ...item, region: item.region.value }))),
      tap(x => console.log(x))
    );
  }
}
