import Card from './Card.enum';
import DecisionEngine from './DecisionEngine';

class Hand {
  public card1: Card;
  public card2: Card;
  private decisionEngine: DecisionEngine;

  constructor(card1: Card, card2: Card) {
    this.card1 = card1;
    this.card2 = card2;
    this.decisionEngine = new DecisionEngine();
  }

  public getName(): String {
    let name: String = '';

    if (this.getValue() === 21) {
      name = 'Blackjack';
    } else if (this.isPair()) {
      name = `Pair ${this.card1 === 11 ? 'Ace' : this.card1}`;
    } else if (this.isSoftHands()) {
      const nonAceCard = this.card1 === Card.ACE ? this.card2 : this.card1;
      name = `Soft ${nonAceCard}`;
    } else if (this.isHardHands()) {
      name = `Hard ${this.getValue()}`;
    }

    return name;
  }

  public getValue(): number {
    const combinedValues = this.card1 + this.card2;
    if (
      combinedValues > 21 &&
      (this.card1 === Card.ACE || this.card2 === Card.ACE)
    ) {
      return combinedValues - 10; // Treat the ace as a 1
    }
    return combinedValues;
  }

  public isHardHands(): boolean {
    return !this.isPair() && !this.isSoftHands();
  }

  public isSoftHands(): boolean {
    return (
      !this.isPair() && (this.card1 === Card.ACE || this.card2 === Card.ACE)
    );
  }

  public isPair(): boolean {
    return this.card1 === this.card2;
  }
}

export default Hand;
