import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../models/country.interface';

@Component({
  selector: 'wb-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.css']
})
export class CountryListItemComponent implements OnInit {
  @Input() public country: Country;
  constructor() {}

  ngOnInit() {}
}
