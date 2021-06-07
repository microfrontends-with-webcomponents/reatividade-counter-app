import { ApplicationRef, DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CardCounterComponent } from "./components/card-counter/card-counter.component";
import { StoreModule } from "./store/counter.module";
import { environment } from "../environments/environment";
@NgModule({
  declarations: [AppComponent, CardCounterComponent],
  imports: [StoreModule, BrowserModule],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppCounterModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(): void {
    // customElements.define(
    //   "app-card",
    //   createCustomElement(AppComponent, { injector: this.injector })
    // );
  }
}
