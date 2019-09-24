import { Component, OnInit } from '@angular/core';
import { CountryCounterStoreService } from '../../../country-counter-store.service';

@Component({
  selector: 'wb-country-counter',
  templateUrl: './country-counter.component.html',
  styleUrls: ['./country-counter.component.css']
})
export class CountryCounterComponent implements OnInit {
  public numCountries$ = this.store.select$();

  constructor(private store: CountryCounterStoreService) {}

  ngOnInit() {}
}
