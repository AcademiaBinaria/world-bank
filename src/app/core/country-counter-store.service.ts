import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryCounterStoreService {
  private numCountries = 9;

  private numCountries$ = new Subject<number>();

  public set(numCountries) {
    this.numCountries = numCountries;
    this.numCountries$.next(this.numCountries);
  }

  public select$() {
    return this.numCountries$.asObservable();
  }

  constructor() {}
}
