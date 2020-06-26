import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { FlightResultsModule } from './app/flight-results/flight-results.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FlightResultsModule)
  .catch(err => console.error(err));
