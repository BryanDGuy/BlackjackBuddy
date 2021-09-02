import Card from './Card.enum';

class Hand {
  public cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  public getName(): String {
    let name: String = '';

    if (this.getSize() < 2) {
      name = '';
    } else if (this.getValue() === 21) {
      name = 'Blackjack';
    } else if (this.isPair()) {
      name = `Pair ${this.cards[0] === Card.ACE ? 'Ace' : this.cards[0]}`;
    } else if (this.isSoftHands()) {
      const nonAceCard =
        this.cards[0] === Card.ACE ? this.cards[1] : this.cards[0];
      name = `Soft ${nonAceCard}`;
    } else if (this.isHardHands()) {
      name = `Hard ${this.getValue()}`;
    }

    return name;
  }

  public getSize(): number {
    return this.cards.length;
  }

  public getValue(): number {
    if (this.cards.length === 0) {
      return 0;
    }

    return this.cards.reduce((sum, card) => {
      sum += card;

      if (sum > 21 && card === Card.ACE) {
        sum -= 10;
      }

      return sum;
    });
  }

  public isHardHands(): boolean {
    return !this.isPair() && !this.isSoftHands();
  }

  public isSoftHands(): boolean {
    return (
      !this.isPair() &&
      this.cards.length === 2 &&
      (this.cards[0] === Card.ACE || this.cards[1] === Card.ACE)
    );
  }

  public isPair(): boolean {
    return this.cards.length === 2 && this.cards[0] === this.cards[1];
  }
}

export default Hand;
