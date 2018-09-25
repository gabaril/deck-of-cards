import { DealerService, Card } from './../../services/dealer.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit, OnDestroy {
  private handChangeSubscription: Subscription;
  public hand: Card[];

  constructor(
    private handEvent: DealerService
  ) { }

  ngOnInit() {
    this.hand = new Array<Card>();
    // subscribe to receive cards from dealer
    this.handChangeSubscription = this.handEvent.handChange
      .subscribe(iCard => {
        this.hand.push(iCard);
      });
  }

  ngOnDestroy() {
    // unsubscribe on destroy
    this.handChangeSubscription.unsubscribe();
  }

}
