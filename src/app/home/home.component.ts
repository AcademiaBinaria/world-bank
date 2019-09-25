import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  public countries$: Observable<Country[]>;
  public allCountries: Country[];

  constructor(private store: CountryCounterStoreService, private countriesServices: CountriesService) {}

  public ngOnInit() {
    this.countries$ = this.countriesServices.getAll$().pipe(
      tap(items => {
        this.allCountries = items;
        this.store.set({ numCountries: items.length });
      })
    );
  }

  public filterCountries(countryName: string) {
    const filtrados = this.allCountries.filter(c => c.name.toLowerCase().includes(countryName.toLowerCase()));
    this.store.set({ numCountries: filtrados.length });
    this.countries$ = of(filtrados);
  }
}
