# TurnerTownsendApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Thoughts and approach
I followed a feature based project approach where there is state, service, model inside the playlist feature folder.

The playlist folder is a separate module from the app module to allow for great performance with lazy loading

The state management used was ngrx with actions, selectors, effects and a reducer.

Angular material List module was used to display the playlist.

## Successes
Performant code
State management
Linting installed and working
Unit tests working

## Challenges
Since Angular 13 ships with tslint removed by default, I had to install eslint and get it configured for linting

## Alternative approach
I could have used nx dev tools to create a monorepo for the project

Also, I could have used the container presentation component pattern which allowed the container to speak directly to the ngrx data store. Or could have used the facade pattern which gives greatly abstraction and separation with loose coupling.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
