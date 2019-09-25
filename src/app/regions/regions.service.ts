import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class RegionsService {
  constructor(private http: HttpClient) {}

  public getAll$(): Observable<any[]> {
    const url = `${environment.url}/region?per_page=1000&format=json`;
    return this.http.get<any>(url).pipe(
      map(res => res[1]),
      map(apiArray => apiArray.filter(item => item.id !== ''))
    );
  }
}