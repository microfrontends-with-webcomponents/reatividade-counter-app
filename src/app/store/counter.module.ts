import { StoreModule as StoreModuleCount } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";
import { Inject, NgModule } from "@angular/core";
import { environment } from "src/environments/environment";

export const rootReducer = (state: any) => state;

@NgModule({
  imports: [StoreModuleCount.forRoot(rootReducer)],
})
export class StoreModule {}
