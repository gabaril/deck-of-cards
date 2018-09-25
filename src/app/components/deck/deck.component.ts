import { Component, OnInit } from '@angular/core';
import { DealerService, Rank, Suit, Card } from './../../services/dealer.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  private ranks: Rank[] = [
    { name: 'A' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: '10' },
    { name: 'J' },
    { name: 'Q' },
    { name: 'K' }
  ];
  private colors: Suit[] = [
    { name: 'Clubs' },
    { name: 'Diamonds' },
    { name: 'Hearts' },
    { name: 'Spades' }
  ];
  public deckArr: Card[] = new Array;

  constructor(
    private dealer: DealerService
  ) { }

  ngOnInit() {
    this.initDeck();
  }

  public initDeck() {
    this.colors.forEach(iSuit => {
      this.ranks.forEach(iRank => {
        this.deckArr.push({ rank: iRank, suit: iSuit });
      });
    });
  }

  public shuffle() {
    const tempArr = new Array;
    let random: number;
    for (let i = this.deckArr.length; i > 0; i--) {
      random = Math.floor(Math.random() * this.deckArr.length);
      tempArr.push(new Object(this.deckArr[random]));
      this.deckArr.splice(random, 1);
    }
    this.deckArr = Array.from(tempArr);
  }

  public dealOneCard() {
    this.dealer.handChange.next(this.deckArr.pop());
  }

}
