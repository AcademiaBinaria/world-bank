import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryCounterStoreService {
  private state: CountryCounter = { numCountries: 0 };

  private numCountries$ = new BehaviorSubject<CountryCounter>(this.get());

  public set(value: CountryCounter) {
    this.state = { ...value };
    this.numCountries$.next(this.get());
  }

  public get() {
    return { ...this.state };
  }

  public select$() {
    return this.numCountries$.asObservable();
  }

  constructor() {}
}

export interface CountryCounter {
  numCountries: number;
}
