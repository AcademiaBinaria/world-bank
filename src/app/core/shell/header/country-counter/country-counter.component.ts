import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wb-country-counter',
  templateUrl: './country-counter.component.html',
  styleUrls: ['./country-counter.component.css']
})
export class CountryCounterComponent implements OnInit {
  public numCountries = 0;
  constructor() {}

  ngOnInit() {}
}
