import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryCounterStoreService } from '../../../country-counter-store.service';

@Component({
  selector: 'wb-country-counter',
  templateUrl: './country-counter.component.html',
  styleUrls: ['./country-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryCounterComponent implements OnInit {
  public numCountries$: Observable<number> = this.store.select$().pipe(map(x => x.numCountries));

  constructor(private store: CountryCounterStoreService) {}

  ngOnInit() {}
}
