# WorldBank

## Api explorer

- http://api.worldbank.org/V2/country?per_page=1000&format=json
- http://api.worldbank.org/v2/region/?per_page=1000&format=json
- http://api.worldbank.org/v2/region/ECS/country?per_page=1000&format=json
- http://api.worldbank.org/v2/region/ECS?format=json



## App Routes

### /

### /regions/

### /regions/ECS

## Modules

> Infrastructure...

### Core

- ShellComponent
  - HeaderComponent
    - CountryCounterComponent
  - MainComponent

- CountriesService
  - getAll$()
  - filterByName(name)
  - getByRegion$(code)
- CountryCounterStore
  - select$()
  - set(value)
- InterceptorService
  - addPageAndFormat()

### Shared

- CountryListComponent
  - CountryRowComponent

> Per feature route...

### Home

- HomeComponent
  - CountryFilterComponent
  - CountryListComponent

### Regions

- RegionsComponent
  - RegionsListComponent
  - CountryListComponent
- RegionsService
  - getRegionsWithId$()

### Region/:code

- RegionComponent
  - RegionDataComponent
  - CountryListComponent
- RegionService
  - getRegion$(code)

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
