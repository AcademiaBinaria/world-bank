import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CountriesService } from '../core/countries.service';
import { CountryCounterStoreService } from '../core/country-counter-store.service';
import { Country } from '../shared/models/country.interface';

@Component({
  selector: 'wb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public countries: Country[];
  private allCountries: Country[] = [];

  constructor(private store: CountryCounterStoreService, private countriesServices: CountriesService) {}

  public ngOnInit() {
    this.countriesServices.getAll$().subscribe(res => {
      this.allCountries = res;
      this.countries = [...this.allCountries];
      this.store.set({ numCountries: this.countries.length });
    });
  }

  public filterCountries(countryName: string) {
    this.countries = this.allCountries.filter(c => c.name.includes(countryName));
    this.store.set({ numCountries: this.countries.length });
  }
}
