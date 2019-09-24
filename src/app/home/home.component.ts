import { Component, OnInit } from '@angular/core';
import { CountryCounterStoreService } from '../core/country-counter-store.service';
import { Country } from '../shared/models/country.interface';

@Component({
  selector: 'wb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public countries: Country[];
  private allCountries: Country[] = [
    {
      name: 'Spain',
      iso2: 'es',
      region: 'ECS'
    },
    {
      name: 'Portugal',
      iso2: 'pt',
      region: 'ECS'
    },
    {
      name: 'Poland',
      iso2: 'pl',
      region: 'ECS'
    }
  ];

  constructor(private store: CountryCounterStoreService) {}

  public ngOnInit() {
    this.countries = [...this.allCountries];
  }

  public filterCountries(countryName: string) {
    this.countries = this.allCountries.filter(c => c.name.includes(countryName));
    this.store.set(this.countries.length);
  }
}
