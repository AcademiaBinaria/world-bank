import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListItemComponent } from './country-list-item.component';

describe('CountryListItemComponent', () => {
  let component: CountryListItemComponent;
  let fixture: ComponentFixture<CountryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
