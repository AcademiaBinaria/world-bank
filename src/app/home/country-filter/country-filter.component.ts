import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'wb-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.css']
})
export class CountryFilterComponent implements OnInit {
  // private formBuilder; // = new FormBuilder();

  constructor(private formBuilder: FormBuilder) {
    // this.formBuilder = formBuilder;
  }

  ngOnInit() {}
}
