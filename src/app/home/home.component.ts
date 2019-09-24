import { Component, OnInit } from '@angular/core';
import { Country } from '../shared/models/country.interface';

@Component({
  selector: 'wb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public countries: Country[] = [
    {
      name: 'Spain',
      iso2: 'es',
      region: 'ECS'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
