import { Component, NgZone } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CustomBroadcast } from "src/app/utils/CustomBroadcast";
import { CustomCommunicationEvents } from "src/app/utils/CustomCommunicationEvents";
import { IWebWorker } from "src/app/utils/interfaces/IWebWorker";
import { WebWorker } from "src/app/utils/WebWorker";
@Component({
  selector: "app-card-counter",
  templateUrl: "./card-counter.component.html",
  styles: [],
})
export class CardCounterComponent {
  count: number = 0;
  broadName: string = "counter";
  worker: IWebWorker = new CustomCommunicationEvents();

  constructor(private store: Store<{ count: number }>, private ngZone: NgZone) {
    const handleNewMessage = (data: any) => {
      if (!!(data.type !== "RPC")) this.count = data.payload;
      // if (!!data.detail) this.count = data.detail.payload;

      // this.ngZone.run(() => {
      //   this.count = data.payload;
      // });
    };

    if (!!this.worker) {
      this.worker.listenMessage((data: any) => {
        handleNewMessage(data);
      });

      // this.worker.listenMessage((channel: BroadcastChannel) => {
      //   channel.onmessage = ({ data }) => {
      //     handleNewMessage(data);
      //   };
      // }, this.broadName);
    }
  }
}
