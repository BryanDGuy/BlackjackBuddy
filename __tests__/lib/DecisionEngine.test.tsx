/**
 * @format
 */
import 'react-native';
import Card from '../../lib/Card.enum';
import Move from '../../lib/Move.enum';
import Hand from '../../lib/Hand';
import DecisionEngine from '../../lib/DecisionEngine';

describe('Hand: 2 2 (Pair 2)', () => {
  const hand = new Hand(Card.TWO, Card.TWO);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SEVEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 8', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 3 3 (Pair 3)', () => {
  const hand = new Hand(Card.THREE, Card.THREE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SEVEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 8', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 4 4 (Pair 4)', () => {
  const hand = new Hand(Card.FOUR, Card.FOUR);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TWO);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.THREE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FOUR);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SEVEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 5 5 (Pair 5)', () => {
  const hand = new Hand(Card.FIVE, Card.FIVE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TWO);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 3', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.THREE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FOUR);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FIVE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SIX);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SEVEN);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 8', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.EIGHT);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 9', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.NINE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 10', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 6 6 (Pair 6)', () => {
  const hand = new Hand(Card.SIX, Card.SIX);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SEVEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 7 7 (Pair 7)', () => {
  const hand = new Hand(Card.SEVEN, Card.SEVEN);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SEVEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 8', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 8 8 (Pair 8)', () => {
  const hand = new Hand(Card.EIGHT, Card.EIGHT);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SEVEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 8', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.EIGHT);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 9', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.NINE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 10', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: A', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.ACE);

    expect(nextMove).toEqual(Move.SPLIT);
  });
});

describe('Hand: 9 9 (Pair 9)', () => {
  const hand = new Hand(Card.NINE, Card.NINE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SEVEN);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.EIGHT);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 9', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.NINE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 10', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TEN);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.ACE);

    expect(nextMove).toEqual(Move.STAND);
  });
});

describe('Hand: 10 10 (Pair 10)', () => {
  const hand = new Hand(Card.TEN, Card.TEN);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TWO);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.THREE);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FOUR);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FIVE);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SIX);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SEVEN);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.EIGHT);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.NINE);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 10', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TEN);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.ACE);

    expect(nextMove).toEqual(Move.STAND);
  });
});

describe('Hand: A A (Pair Ace)', () => {
  const hand = new Hand(Card.ACE, Card.ACE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.SEVEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 8', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.EIGHT);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 9', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.NINE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 10', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.TEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: A', () => {
    const nextMove = decisionEngine.decideMove(hand, Card.ACE);

    expect(nextMove).toEqual(Move.SPLIT);
  });
});

describe('Hand: A 2 (Soft 2)', () => {
  const hand = new Hand(Card.ACE, Card.TWO);
  const inverseHand = new Hand(Card.TWO, Card.ACE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 3 (Soft 3)', () => {
  const hand = new Hand(Card.ACE, Card.THREE);
  const inverseHand = new Hand(Card.THREE, Card.ACE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 4 (Soft 4)', () => {
  const hand = new Hand(Card.ACE, Card.FOUR);
  const inverseHand = new Hand(Card.FOUR, Card.ACE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 5 (Soft 5)', () => {
  const hand = new Hand(Card.ACE, Card.FIVE);
  const inverseHand = new Hand(Card.FIVE, Card.ACE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 6 (Soft 6)', () => {
  const hand = new Hand(Card.ACE, Card.SIX);
  const inverseHand = new Hand(Card.SIX, Card.ACE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 7 (Soft 7)', () => {
  const hand = new Hand(Card.ACE, Card.SEVEN);
  const inverseHand = new Hand(Card.SEVEN, Card.ACE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 8 (Soft 8)', () => {
  const hand = new Hand(Card.ACE, Card.EIGHT);
  const inverseHand = new Hand(Card.EIGHT, Card.ACE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });
});

describe('Hand: A 9 (Soft 9)', () => {
  const hand = new Hand(Card.ACE, Card.NINE);
  const inverseHand = new Hand(Card.NINE, Card.ACE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove = decisionEngine.decideMove(hand, dealerCard);
    const nextMoveInverse = decisionEngine.decideMove(inverseHand, dealerCard);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });
});

describe('Hand: 2 3 // 3 2 (Hard 5)', () => {
  const hand1 = new Hand(Card.TWO, Card.THREE);
  const hand2 = new Hand(Card.THREE, Card.TWO);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });
});

describe('Hand: 2 4 // 4 2 (Hard 6)', () => {
  const hand1 = new Hand(Card.TWO, Card.FOUR);
  const hand2 = new Hand(Card.FOUR, Card.TWO);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
  });
});

describe('Hand: 2 5 // 3 4 // 4 3 // 5 2 (Hard 7)', () => {
  const hand1 = new Hand(Card.TWO, Card.FIVE);
  const hand2 = new Hand(Card.THREE, Card.FOUR);
  const hand3 = new Hand(Card.FOUR, Card.THREE);
  const hand4 = new Hand(Card.FIVE, Card.TWO);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });
});

describe('Hand: 2 6 // 3 5 // 5 3 // 6 2 (Hard 8)', () => {
  const hand1 = new Hand(Card.TWO, Card.SIX);
  const hand2 = new Hand(Card.THREE, Card.FIVE);
  const hand3 = new Hand(Card.FIVE, Card.THREE);
  const hand4 = new Hand(Card.SIX, Card.TWO);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });
});

describe('Hand: 2 7 // 3 6 // 4 5 // 5 4 // 6 3 // 7 2 (Hard 9)', () => {
  const hand1 = new Hand(Card.TWO, Card.SEVEN);
  const hand2 = new Hand(Card.THREE, Card.SIX);
  const hand3 = new Hand(Card.FOUR, Card.FIVE);
  const hand4 = new Hand(Card.FIVE, Card.FOUR);
  const hand5 = new Hand(Card.SIX, Card.THREE);
  const hand6 = new Hand(Card.SEVEN, Card.TWO);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });
});

describe('Hand: 2 8 // 3 7 // 4 6 // 6 4 // 7 3 // 8 2 (Hard 10)', () => {
  const hand1 = new Hand(Card.TWO, Card.EIGHT);
  const hand2 = new Hand(Card.THREE, Card.SEVEN);
  const hand3 = new Hand(Card.FOUR, Card.SIX);
  const hand4 = new Hand(Card.SIX, Card.FOUR);
  const hand5 = new Hand(Card.SEVEN, Card.THREE);
  const hand6 = new Hand(Card.EIGHT, Card.TWO);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });
});

describe('Hand: 2 9 // 3 8 // 4 7 // 5 6 // 6 5 // 7 4 // 8 3 // 9 2 (Hard 11)', () => {
  const hand1 = new Hand(Card.TWO, Card.NINE);
  const hand2 = new Hand(Card.THREE, Card.EIGHT);
  const hand3 = new Hand(Card.FOUR, Card.SEVEN);
  const hand4 = new Hand(Card.FIVE, Card.SIX);
  const hand5 = new Hand(Card.SIX, Card.FIVE);
  const hand6 = new Hand(Card.SEVEN, Card.FOUR);
  const hand7 = new Hand(Card.EIGHT, Card.THREE);
  const hand8 = new Hand(Card.NINE, Card.TWO);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
    expect(nextMove7).toEqual(Move.DOUBLEDOWN);
    expect(nextMove8).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
    expect(nextMove7).toEqual(Move.DOUBLEDOWN);
    expect(nextMove8).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
    expect(nextMove7).toEqual(Move.DOUBLEDOWN);
    expect(nextMove8).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
    expect(nextMove7).toEqual(Move.DOUBLEDOWN);
    expect(nextMove8).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
    expect(nextMove7).toEqual(Move.DOUBLEDOWN);
    expect(nextMove8).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
    expect(nextMove7).toEqual(Move.DOUBLEDOWN);
    expect(nextMove8).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
    expect(nextMove7).toEqual(Move.DOUBLEDOWN);
    expect(nextMove8).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
    expect(nextMove7).toEqual(Move.DOUBLEDOWN);
    expect(nextMove8).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
    expect(nextMove7).toEqual(Move.DOUBLEDOWN);
    expect(nextMove8).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });
});

describe('Hand: 2 10 // 3 9 // 4 8 // 5 7 // 7 5 // 8 4 // 9 3 // 10 2 (Hard 12)', () => {
  const hand1 = new Hand(Card.TWO, Card.TEN);
  const hand2 = new Hand(Card.THREE, Card.NINE);
  const hand3 = new Hand(Card.FOUR, Card.EIGHT);
  const hand4 = new Hand(Card.FIVE, Card.SEVEN);
  const hand5 = new Hand(Card.SEVEN, Card.FIVE);
  const hand6 = new Hand(Card.EIGHT, Card.FOUR);
  const hand7 = new Hand(Card.NINE, Card.THREE);
  const hand8 = new Hand(Card.TEN, Card.TWO);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });
});

describe('Hand: 3 10 // 4 9 // 5 8 // 6 7 // 7 6 // 8 5 // 9 4 // 10 3 (Hard 13)', () => {
  const hand1 = new Hand(Card.THREE, Card.TEN);
  const hand2 = new Hand(Card.FOUR, Card.NINE);
  const hand3 = new Hand(Card.FIVE, Card.EIGHT);
  const hand4 = new Hand(Card.SIX, Card.SEVEN);
  const hand5 = new Hand(Card.SEVEN, Card.SIX);
  const hand6 = new Hand(Card.EIGHT, Card.FIVE);
  const hand7 = new Hand(Card.NINE, Card.FOUR);
  const hand8 = new Hand(Card.TEN, Card.THREE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);
    const nextMove7 = decisionEngine.decideMove(hand7, dealerCard);
    const nextMove8 = decisionEngine.decideMove(hand8, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
  });
});

describe('Hand: 4 10 // 5 9 // 6 8 // 8 6 // 9 5 // 10 4 (Hard 14)', () => {
  const hand1 = new Hand(Card.FOUR, Card.TEN);
  const hand2 = new Hand(Card.FIVE, Card.NINE);
  const hand3 = new Hand(Card.SIX, Card.EIGHT);
  const hand4 = new Hand(Card.EIGHT, Card.SIX);
  const hand5 = new Hand(Card.NINE, Card.FIVE);
  const hand6 = new Hand(Card.TEN, Card.FOUR);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });
});

describe('Hand: 5 10 // 6 9 // 7 8 // 8 7 // 9 6 // 10 5 (Hard 15)', () => {
  const hand1 = new Hand(Card.FIVE, Card.TEN);
  const hand2 = new Hand(Card.SIX, Card.NINE);
  const hand3 = new Hand(Card.SEVEN, Card.EIGHT);
  const hand4 = new Hand(Card.EIGHT, Card.SEVEN);
  const hand5 = new Hand(Card.NINE, Card.SIX);
  const hand6 = new Hand(Card.TEN, Card.FIVE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);
    const nextMove5 = decisionEngine.decideMove(hand5, dealerCard);
    const nextMove6 = decisionEngine.decideMove(hand6, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });
});

describe('Hand: 6 10 // 7 9 // 9 7 // 10 6 (Hard 16)', () => {
  const hand1 = new Hand(Card.SIX, Card.TEN);
  const hand2 = new Hand(Card.SEVEN, Card.NINE);
  const hand3 = new Hand(Card.NINE, Card.SEVEN);
  const hand4 = new Hand(Card.TEN, Card.SIX);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });
});

describe('Hand: 7 10 // 8 9 // 9 8 // 10 7 (Hard 17)', () => {
  const hand1 = new Hand(Card.SEVEN, Card.TEN);
  const hand2 = new Hand(Card.EIGHT, Card.NINE);
  const hand3 = new Hand(Card.NINE, Card.EIGHT);
  const hand4 = new Hand(Card.TEN, Card.SEVEN);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);
    const nextMove3 = decisionEngine.decideMove(hand3, dealerCard);
    const nextMove4 = decisionEngine.decideMove(hand4, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });
});

describe('Hand: 8 10 // 10 8 (Hard 18)', () => {
  const hand1 = new Hand(Card.EIGHT, Card.TEN);
  const hand2 = new Hand(Card.TEN, Card.EIGHT);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });
});

describe('Hand: 9 10 // 10 9 (Hard 19)', () => {
  const hand1 = new Hand(Card.NINE, Card.TEN);
  const hand2 = new Hand(Card.TEN, Card.NINE);
  const decisionEngine = new DecisionEngine();

  it('Dealer: 2', () => {
    const dealerCard = Card.TWO;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const dealerCard = Card.THREE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const dealerCard = Card.FOUR;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const dealerCard = Card.FIVE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const dealerCard = Card.SIX;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const dealerCard = Card.SEVEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const dealerCard = Card.EIGHT;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const dealerCard = Card.NINE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: 10', () => {
    const dealerCard = Card.TEN;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const dealerCard = Card.ACE;

    const nextMove1 = decisionEngine.decideMove(hand1, dealerCard);
    const nextMove2 = decisionEngine.decideMove(hand2, dealerCard);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
  });
});
