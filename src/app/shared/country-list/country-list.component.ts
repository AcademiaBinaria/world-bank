import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../models/country.interface';

@Component({
  selector: 'wb-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  @Input() public countries: Country[] = [];

  constructor() {}

  ngOnInit() {}
}
