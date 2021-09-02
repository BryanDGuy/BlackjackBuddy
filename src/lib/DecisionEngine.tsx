import Move from './Move.enum';
import Card from './Card.enum';
import Hand from './Hand';

class DecisionEngine {
  constructor() {}

  public decideMove(playerHand: Hand, dealerCard: Card | undefined): Move {
    if (!dealerCard) {
      return Move.SELECTDEALERCARD;
    }
    if (playerHand.getSize() < 2) {
      return Move.SELECTPLAYERCARDS;
    }

    let handIndex: number = 0;
    let dealerIndex: number = 0;

    if (playerHand.isHardHands()) {
      if (playerHand.getValue() >= 17) {
        handIndex = 0;
      } else if (playerHand.getValue() === 16) {
        handIndex = 1;
      } else if (playerHand.getValue() === 15) {
        handIndex = 2;
      } else if (playerHand.getValue() === 14) {
        handIndex = 3;
      } else if (playerHand.getValue() === 13) {
        handIndex = 4;
      } else if (playerHand.getValue() === 12) {
        handIndex = 5;
      } else if (playerHand.getValue() === 11) {
        handIndex = 6;
      } else if (playerHand.getValue() === 10) {
        handIndex = 7;
      } else if (playerHand.getValue() === 9) {
        handIndex = 8;
      } else if (playerHand.getValue() <= 8) {
        handIndex = 9;
      }
    } else if (playerHand.isSoftHands()) {
      if (playerHand.getValue() === 20) {
        handIndex = 10;
      } else if (playerHand.getValue() === 19) {
        handIndex = 11;
      } else if (playerHand.getValue() === 18) {
        handIndex = 12;
      } else if (playerHand.getValue() === 17) {
        handIndex = 13;
      } else if (playerHand.getValue() === 16) {
        handIndex = 14;
      } else if (playerHand.getValue() === 15) {
        handIndex = 15;
      } else if (playerHand.getValue() === 14) {
        handIndex = 16;
      } else if (playerHand.getValue() === 13) {
        handIndex = 17;
      }
    } else if (playerHand.isPair()) {
      switch (playerHand.cards[0]) {
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

    const nextMove = this.decisionMatrix[handIndex][dealerIndex];
    return nextMove === Move.DOUBLEDOWN && playerHand.getSize() > 2
      ? Move.HIT
      : nextMove;
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

export default DecisionEngine;
