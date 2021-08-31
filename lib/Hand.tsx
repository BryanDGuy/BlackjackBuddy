import Card from './Card.enum';
import Move from './Move.enum';

class Hand {
  public card1: Card;
  public card2: Card;

  constructor(card1: Card, card2: Card) {
    this.card1 = card1;
    this.card2 = card2;
  }

  public decideMove(dealerCard: Card): Move {
    let handIndex: number = 0;
    let dealerIndex: number = 0;

    if (this.isHardHands()) {
      if (this.getValue() >= 17) {
        handIndex = 0;
      } else if (this.getValue() === 16) {
        handIndex = 1;
      } else if (this.getValue() === 15) {
        handIndex = 2;
      } else if (this.getValue() === 14) {
        handIndex = 3;
      } else if (this.getValue() === 13) {
        handIndex = 4;
      } else if (this.getValue() === 12) {
        handIndex = 5;
      } else if (this.getValue() === 11) {
        handIndex = 6;
      } else if (this.getValue() === 10) {
        handIndex = 7;
      } else if (this.getValue() === 9) {
        handIndex = 8;
      } else if (this.getValue() <= 8) {
        handIndex = 9;
      }
    } else if (this.isSoftHands()) {
      if (this.getValue() === 20) {
        handIndex = 10;
      } else if (this.getValue() === 19) {
        handIndex = 11;
      } else if (this.getValue() === 18) {
        handIndex = 12;
      } else if (this.getValue() === 17) {
        handIndex = 13;
      } else if (this.getValue() === 16) {
        handIndex = 14;
      } else if (this.getValue() === 15) {
        handIndex = 15;
      } else if (this.getValue() === 14) {
        handIndex = 16;
      } else if (this.getValue() === 13) {
        handIndex = 17;
      }
    } else if (this.isPair()) {
      switch (this.card1) {
        case Card.ACE: {
          handIndex = 18;
          break;
        }
        case Card.TEN: {
          handIndex = 19;
          break;
        }
        case Card.NINE: {
          handIndex = 20;
          break;
        }
        case Card.EIGHT: {
          handIndex = 21;
          break;
        }
        case Card.SEVEN: {
          handIndex = 22;
          break;
        }
        case Card.SIX: {
          handIndex = 23;
          break;
        }
        case Card.FIVE: {
          handIndex = 24;
          break;
        }
        case Card.FOUR: {
          handIndex = 25;
          break;
        }
        case Card.THREE: {
          handIndex = 26;
          break;
        }
        case Card.TWO: {
          handIndex = 27;
          break;
        }
      }
    }

    switch (dealerCard) {
      case Card.ACE: {
        dealerIndex = 0;
        break;
      }
      case Card.TEN: {
        dealerIndex = 1;
        break;
      }
      case Card.NINE: {
        dealerIndex = 2;
        break;
      }
      case Card.EIGHT: {
        dealerIndex = 3;
        break;
      }
      case Card.SEVEN: {
        dealerIndex = 4;
        break;
      }
      case Card.SIX: {
        dealerIndex = 5;
        break;
      }
      case Card.FIVE: {
        dealerIndex = 6;
        break;
      }
      case Card.FOUR: {
        dealerIndex = 7;
        break;
      }
      case Card.THREE: {
        dealerIndex = 8;
        break;
      }
      case Card.TWO: {
        dealerIndex = 9;
        break;
      }
    }

    return this.decisionMatrix[handIndex][dealerIndex];
  }

  private getValue(): number {
    const combinedValues = this.card1 + this.card2;
    if (
      combinedValues > 21 &&
      (this.card1 === Card.ACE || this.card2 === Card.ACE)
    ) {
      return combinedValues - 10; // Treat the ace as a 1
    }
    return combinedValues;
  }

  private isBlackjack(): boolean {
    return this.getValue() === 21;
  }

  private isHardHands(): boolean {
    return !this.isPair() && !this.isSoftHands();
  }

  private isSoftHands(): boolean {
    return (
      !this.isPair() && (this.card1 === Card.ACE || this.card2 === Card.ACE)
    );
  }

  private isPair(): boolean {
    return this.card1 === this.card2;
  }

  private decisionMatrix: Move[][] = [
    [
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.HIT,
      Move.HIT,
    ],
    [
      Move.HIT,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.HIT,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
    ],
    [
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
    ],
    [
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.STAND,
      Move.STAND,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.STAND,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.HIT,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.HIT,
      Move.HIT,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.HIT,
      Move.HIT,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.HIT,
      Move.HIT,
      Move.HIT,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.HIT,
      Move.HIT,
      Move.HIT,
    ],
    [
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
    ],
    [
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
      Move.STAND,
    ],
    [
      Move.STAND,
      Move.STAND,
      Move.SPLIT,
      Move.SPLIT,
      Move.STAND,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
    ],
    [
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
      Move.DOUBLEDOWN,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
    ],
    [
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.HIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
      Move.SPLIT,
    ],
  ];
}

export default Hand;
