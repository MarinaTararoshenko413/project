# ExampleProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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

## How to use i18n

1. Install plugin:
    https://www.npmjs.com/package/ngx-i18nsupport

In package.json script section:
    `"locale-files": "ng xi18n --output-path locale --i18n-locale es-CL && xliffmerge --profile src/xliffmerge.json es-PE es-MX es-CO es-AR es-CL es-EC en-US"`

**Note: If you change the base HTML of any component with a `i18n` tag on it, you should regenerate the translation files, otherwise it won't work. Run this command: `npm run locale-files`**

2. ng xi18n --output-path locale --i18n-locale es-CL

3. xliffmerge --profile src/xliffmerge.json es-PE es-MX es-CO es-AR es-CL es-EC en-US

In angular.json should be add next settings:
    "architect" > "build" > "configurations" > add locales
    "architect" > "serve" > "configurations" > add locales
