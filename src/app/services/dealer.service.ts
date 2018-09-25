import { Subject } from 'rxjs';

export interface Rank {
  name: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
}

export interface Suit {
  name: 'Clubs' | 'Diamonds' | 'Hearts' | 'Spades';
}

export interface Card {
  rank: Rank;
  suit: Suit;
}

export class DealerService {

  constructor() { }

  public handChange: Subject<Card> = new Subject<Card>();
}
