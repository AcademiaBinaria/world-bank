import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCounterComponent } from './country-counter.component';

describe('CountryCounterComponent', () => {
  let component: CountryCounterComponent;
  let fixture: ComponentFixture<CountryCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
