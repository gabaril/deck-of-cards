import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DeckComponent } from './components/deck/deck.component';
import { HandComponent } from './components/hand/hand.component';
import { DealerService } from './services/dealer.service';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    HandComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DealerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
