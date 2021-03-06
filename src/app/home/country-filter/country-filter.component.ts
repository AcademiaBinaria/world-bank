import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wb-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.css']
})
export class CountryFilterComponent implements OnInit {
  @Output() private search = new EventEmitter<string>();

  public filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public searchCoutry() {
    this.search.emit(this.filterForm.value.countryName);
  }

  public showError() {
    const control = this.filterForm.controls.countryName;
    return control.invalid && control.touched;
  }

  public ngOnInit() {
    const visa = { num: '7653465w2348', valid: new Date() };
    this.filterForm = this.formBuilder.group({
      countryName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      month: [visa.valid.getMonth(), Validators.required] // new FormControl(visa.valid.getMonth())
    });
  }
}
