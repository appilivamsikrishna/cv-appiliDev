import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { inject } from "@vercel/analytics";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as serviceWorker from "./serviceWorker";
if (environment.production) {
  enableProdMode();
}
serviceWorker.unregister();
inject();
platformBrowserDynamic().bootstrapModule(AppModule);
