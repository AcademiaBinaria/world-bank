import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class RegionsService {
  constructor(private http: HttpClient) {}

  public getAll$(): Observable<any[]> {
    const url = `${environment.url}/region`;
    return this.http.get<any>(url).pipe(map(apiArray => apiArray.filter(item => item.id !== '')));
  }
}
