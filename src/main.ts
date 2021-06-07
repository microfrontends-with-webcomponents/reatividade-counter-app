import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "zone.js/dist/zone";
import { AppCounterModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

const ANGULAR_APP = "card-counter-app";
(window as any)[ANGULAR_APP] = () =>
  platformBrowserDynamic()
    .bootstrapModule(AppCounterModule)
    .catch((err) => console.error(err));
