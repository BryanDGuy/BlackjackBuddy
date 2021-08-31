/**
 * @format
 */
import 'react-native';
import Card from '../../lib/Card.enum';
import Move from '../../lib/Move.enum';
import Hand from '../../lib/Hand';

describe('Hand: 2 2 (Pair 2)', () => {
  const hand = new Hand(Card.TWO, Card.TWO);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 3 3 (Pair 3)', () => {
  const hand = new Hand(Card.THREE, Card.THREE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 4 4 (Pair 4)', () => {
  const hand = new Hand(Card.FOUR, Card.FOUR);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 5 5 (Pair 5)', () => {
  const hand = new Hand(Card.FIVE, Card.FIVE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 6 6 (Pair 6)', () => {
  const hand = new Hand(Card.SIX, Card.SIX);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 7 7 (Pair 7)', () => {
  const hand = new Hand(Card.SEVEN, Card.SEVEN);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.ACE);

    expect(nextMove).toEqual(Move.HIT);
  });
});

describe('Hand: 8 8 (Pair 8)', () => {
  const hand = new Hand(Card.EIGHT, Card.EIGHT);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.ACE);

    expect(nextMove).toEqual(Move.SPLIT);
  });
});

describe('Hand: 9 9 (Pair 9)', () => {
  const hand = new Hand(Card.NINE, Card.NINE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.ACE);

    expect(nextMove).toEqual(Move.STAND);
  });
});

describe('Hand: 10 10 (Pair 10)', () => {
  const hand = new Hand(Card.TEN, Card.TEN);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.ACE);

    expect(nextMove).toEqual(Move.STAND);
  });
});

describe('Hand: A A (Pair Ace)', () => {
  const hand = new Hand(Card.ACE, Card.ACE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.SPLIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.ACE);

    expect(nextMove).toEqual(Move.SPLIT);
  });
});

describe('Hand: A 2 (Soft 2)', () => {
  const hand = new Hand(Card.ACE, Card.TWO);
  const inverseHand = new Hand(Card.TWO, Card.ACE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);
    const nextMoveInverse = inverseHand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);
    const nextMoveInverse = inverseHand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);
    const nextMoveInverse = inverseHand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);
    const nextMoveInverse = inverseHand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);
    const nextMoveInverse = inverseHand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);
    const nextMoveInverse = inverseHand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);
    const nextMoveInverse = inverseHand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);
    const nextMoveInverse = inverseHand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 3 (Soft 3)', () => {
  const hand = new Hand(Card.ACE, Card.THREE);
  const inverseHand = new Hand(Card.THREE, Card.ACE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);
    const nextMoveInverse = inverseHand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);
    const nextMoveInverse = inverseHand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);
    const nextMoveInverse = inverseHand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);
    const nextMoveInverse = inverseHand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);
    const nextMoveInverse = inverseHand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);
    const nextMoveInverse = inverseHand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);
    const nextMoveInverse = inverseHand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);
    const nextMoveInverse = inverseHand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 4 (Soft 4)', () => {
  const hand = new Hand(Card.ACE, Card.FOUR);
  const inverseHand = new Hand(Card.FOUR, Card.ACE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);
    const nextMoveInverse = inverseHand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);
    const nextMoveInverse = inverseHand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);
    const nextMoveInverse = inverseHand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);
    const nextMoveInverse = inverseHand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);
    const nextMoveInverse = inverseHand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);
    const nextMoveInverse = inverseHand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);
    const nextMoveInverse = inverseHand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);
    const nextMoveInverse = inverseHand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 5 (Soft 5)', () => {
  const hand = new Hand(Card.ACE, Card.FIVE);
  const inverseHand = new Hand(Card.FIVE, Card.ACE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);
    const nextMoveInverse = inverseHand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);
    const nextMoveInverse = inverseHand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);
    const nextMoveInverse = inverseHand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);
    const nextMoveInverse = inverseHand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);
    const nextMoveInverse = inverseHand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);
    const nextMoveInverse = inverseHand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);
    const nextMoveInverse = inverseHand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);
    const nextMoveInverse = inverseHand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 6 (Soft 6)', () => {
  const hand = new Hand(Card.ACE, Card.SIX);
  const inverseHand = new Hand(Card.SIX, Card.ACE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);
    const nextMoveInverse = inverseHand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);
    const nextMoveInverse = inverseHand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);
    const nextMoveInverse = inverseHand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);
    const nextMoveInverse = inverseHand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);
    const nextMoveInverse = inverseHand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);
    const nextMoveInverse = inverseHand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);
    const nextMoveInverse = inverseHand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);
    const nextMoveInverse = inverseHand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 7 (Soft 7)', () => {
  const hand = new Hand(Card.ACE, Card.SEVEN);
  const inverseHand = new Hand(Card.SEVEN, Card.ACE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);
    const nextMoveInverse = inverseHand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);
    const nextMoveInverse = inverseHand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);
    const nextMoveInverse = inverseHand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);
    const nextMoveInverse = inverseHand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);
    const nextMoveInverse = inverseHand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.DOUBLEDOWN);
    expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);
    const nextMoveInverse = inverseHand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);
    const nextMoveInverse = inverseHand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);
    const nextMoveInverse = inverseHand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.HIT);
    expect(nextMoveInverse).toEqual(Move.HIT);
  });
});

describe('Hand: A 8 (Soft 8)', () => {
  const hand = new Hand(Card.ACE, Card.EIGHT);
  const inverseHand = new Hand(Card.EIGHT, Card.ACE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);
    const nextMoveInverse = inverseHand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);
    const nextMoveInverse = inverseHand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);
    const nextMoveInverse = inverseHand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);
    const nextMoveInverse = inverseHand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);
    const nextMoveInverse = inverseHand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);
    const nextMoveInverse = inverseHand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);
    const nextMoveInverse = inverseHand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);
    const nextMoveInverse = inverseHand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });
});

describe('Hand: A 9 (Soft 9)', () => {
  const hand = new Hand(Card.ACE, Card.NINE);
  const inverseHand = new Hand(Card.NINE, Card.ACE);

  it('Dealer: 2', () => {
    const nextMove = hand.decideMove(Card.TWO);
    const nextMoveInverse = inverseHand.decideMove(Card.TWO);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const nextMove = hand.decideMove(Card.THREE);
    const nextMoveInverse = inverseHand.decideMove(Card.THREE);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const nextMove = hand.decideMove(Card.FOUR);
    const nextMoveInverse = inverseHand.decideMove(Card.FOUR);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const nextMove = hand.decideMove(Card.FIVE);
    const nextMoveInverse = inverseHand.decideMove(Card.FIVE);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const nextMove = hand.decideMove(Card.SIX);
    const nextMoveInverse = inverseHand.decideMove(Card.SIX);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const nextMove = hand.decideMove(Card.SEVEN);
    const nextMoveInverse = inverseHand.decideMove(Card.SEVEN);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const nextMove = hand.decideMove(Card.EIGHT);
    const nextMoveInverse = inverseHand.decideMove(Card.EIGHT);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const nextMove = hand.decideMove(Card.NINE);
    const nextMoveInverse = inverseHand.decideMove(Card.NINE);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: 10', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const nextMove = hand.decideMove(Card.TEN);
    const nextMoveInverse = inverseHand.decideMove(Card.TEN);

    expect(nextMove).toEqual(Move.STAND);
    expect(nextMoveInverse).toEqual(Move.STAND);
  });
});

describe('Hand: 2 3 // 2 4 // 2 5 // 2 6 // 3 2 // 3 4 // 3 5 // 4 2 // 4 3 // 5 2 // 5 3 // 6 2 (Hard 8 or less)', () => {
  const hand1 = new Hand(Card.TWO, Card.THREE);
  const hand2 = new Hand(Card.TWO, Card.FOUR);
  const hand3 = new Hand(Card.TWO, Card.FIVE);
  const hand4 = new Hand(Card.TWO, Card.SIX);
  const hand5 = new Hand(Card.THREE, Card.TWO);
  const hand6 = new Hand(Card.THREE, Card.FOUR);
  const hand7 = new Hand(Card.THREE, Card.FIVE);
  const hand8 = new Hand(Card.FOUR, Card.TWO);
  const hand9 = new Hand(Card.FOUR, Card.THREE);
  const hand10 = new Hand(Card.FIVE, Card.TWO);
  const hand11 = new Hand(Card.FIVE, Card.THREE);
  const hand12 = new Hand(Card.SIX, Card.TWO);

  it('Dealer: 2', () => {
    const nextMove1 = hand1.decideMove(Card.TWO);
    const nextMove2 = hand2.decideMove(Card.TWO);
    const nextMove3 = hand3.decideMove(Card.TWO);
    const nextMove4 = hand4.decideMove(Card.TWO);
    const nextMove5 = hand5.decideMove(Card.TWO);
    const nextMove6 = hand6.decideMove(Card.TWO);
    const nextMove7 = hand7.decideMove(Card.TWO);
    const nextMove8 = hand8.decideMove(Card.TWO);
    const nextMove9 = hand9.decideMove(Card.TWO);
    const nextMove10 = hand10.decideMove(Card.TWO);
    const nextMove11 = hand11.decideMove(Card.TWO);
    const nextMove12 = hand12.decideMove(Card.TWO);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
    expect(nextMove9).toEqual(Move.HIT);
    expect(nextMove10).toEqual(Move.HIT);
    expect(nextMove11).toEqual(Move.HIT);
    expect(nextMove12).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const nextMove1 = hand1.decideMove(Card.THREE);
    const nextMove2 = hand2.decideMove(Card.THREE);
    const nextMove3 = hand3.decideMove(Card.THREE);
    const nextMove4 = hand4.decideMove(Card.THREE);
    const nextMove5 = hand5.decideMove(Card.THREE);
    const nextMove6 = hand6.decideMove(Card.THREE);
    const nextMove7 = hand7.decideMove(Card.THREE);
    const nextMove8 = hand8.decideMove(Card.THREE);
    const nextMove9 = hand9.decideMove(Card.THREE);
    const nextMove10 = hand10.decideMove(Card.THREE);
    const nextMove11 = hand11.decideMove(Card.THREE);
    const nextMove12 = hand12.decideMove(Card.THREE);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
    expect(nextMove9).toEqual(Move.HIT);
    expect(nextMove10).toEqual(Move.HIT);
    expect(nextMove11).toEqual(Move.HIT);
    expect(nextMove12).toEqual(Move.HIT);
  });

  it('Dealer: 4', () => {
    const nextMove1 = hand1.decideMove(Card.FOUR);
    const nextMove2 = hand2.decideMove(Card.FOUR);
    const nextMove3 = hand3.decideMove(Card.FOUR);
    const nextMove4 = hand4.decideMove(Card.FOUR);
    const nextMove5 = hand5.decideMove(Card.FOUR);
    const nextMove6 = hand6.decideMove(Card.FOUR);
    const nextMove7 = hand7.decideMove(Card.FOUR);
    const nextMove8 = hand8.decideMove(Card.FOUR);
    const nextMove9 = hand9.decideMove(Card.FOUR);
    const nextMove10 = hand10.decideMove(Card.FOUR);
    const nextMove11 = hand11.decideMove(Card.FOUR);
    const nextMove12 = hand12.decideMove(Card.FOUR);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
    expect(nextMove9).toEqual(Move.HIT);
    expect(nextMove10).toEqual(Move.HIT);
    expect(nextMove11).toEqual(Move.HIT);
    expect(nextMove12).toEqual(Move.HIT);
  });

  it('Dealer: 5', () => {
    const nextMove1 = hand1.decideMove(Card.FIVE);
    const nextMove2 = hand2.decideMove(Card.FIVE);
    const nextMove3 = hand3.decideMove(Card.FIVE);
    const nextMove4 = hand4.decideMove(Card.FIVE);
    const nextMove5 = hand5.decideMove(Card.FIVE);
    const nextMove6 = hand6.decideMove(Card.FIVE);
    const nextMove7 = hand7.decideMove(Card.FIVE);
    const nextMove8 = hand8.decideMove(Card.FIVE);
    const nextMove9 = hand9.decideMove(Card.FIVE);
    const nextMove10 = hand10.decideMove(Card.FIVE);
    const nextMove11 = hand11.decideMove(Card.FIVE);
    const nextMove12 = hand12.decideMove(Card.FIVE);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
    expect(nextMove9).toEqual(Move.HIT);
    expect(nextMove10).toEqual(Move.HIT);
    expect(nextMove11).toEqual(Move.HIT);
    expect(nextMove12).toEqual(Move.HIT);
  });

  it('Dealer: 6', () => {
    const nextMove1 = hand1.decideMove(Card.SIX);
    const nextMove2 = hand2.decideMove(Card.SIX);
    const nextMove3 = hand3.decideMove(Card.SIX);
    const nextMove4 = hand4.decideMove(Card.SIX);
    const nextMove5 = hand5.decideMove(Card.SIX);
    const nextMove6 = hand6.decideMove(Card.SIX);
    const nextMove7 = hand7.decideMove(Card.SIX);
    const nextMove8 = hand8.decideMove(Card.SIX);
    const nextMove9 = hand9.decideMove(Card.SIX);
    const nextMove10 = hand10.decideMove(Card.SIX);
    const nextMove11 = hand11.decideMove(Card.SIX);
    const nextMove12 = hand12.decideMove(Card.SIX);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
    expect(nextMove9).toEqual(Move.HIT);
    expect(nextMove10).toEqual(Move.HIT);
    expect(nextMove11).toEqual(Move.HIT);
    expect(nextMove12).toEqual(Move.HIT);
  });

  it('Dealer: 7', () => {
    const nextMove1 = hand1.decideMove(Card.SEVEN);
    const nextMove2 = hand2.decideMove(Card.SEVEN);
    const nextMove3 = hand3.decideMove(Card.SEVEN);
    const nextMove4 = hand4.decideMove(Card.SEVEN);
    const nextMove5 = hand5.decideMove(Card.SEVEN);
    const nextMove6 = hand6.decideMove(Card.SEVEN);
    const nextMove7 = hand7.decideMove(Card.SEVEN);
    const nextMove8 = hand8.decideMove(Card.SEVEN);
    const nextMove9 = hand9.decideMove(Card.SEVEN);
    const nextMove10 = hand10.decideMove(Card.SEVEN);
    const nextMove11 = hand11.decideMove(Card.SEVEN);
    const nextMove12 = hand12.decideMove(Card.SEVEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
    expect(nextMove9).toEqual(Move.HIT);
    expect(nextMove10).toEqual(Move.HIT);
    expect(nextMove11).toEqual(Move.HIT);
    expect(nextMove12).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove1 = hand1.decideMove(Card.EIGHT);
    const nextMove2 = hand2.decideMove(Card.EIGHT);
    const nextMove3 = hand3.decideMove(Card.EIGHT);
    const nextMove4 = hand4.decideMove(Card.EIGHT);
    const nextMove5 = hand5.decideMove(Card.EIGHT);
    const nextMove6 = hand6.decideMove(Card.EIGHT);
    const nextMove7 = hand7.decideMove(Card.EIGHT);
    const nextMove8 = hand8.decideMove(Card.EIGHT);
    const nextMove9 = hand9.decideMove(Card.EIGHT);
    const nextMove10 = hand10.decideMove(Card.EIGHT);
    const nextMove11 = hand11.decideMove(Card.EIGHT);
    const nextMove12 = hand12.decideMove(Card.EIGHT);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
    expect(nextMove9).toEqual(Move.HIT);
    expect(nextMove10).toEqual(Move.HIT);
    expect(nextMove11).toEqual(Move.HIT);
    expect(nextMove12).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove1 = hand1.decideMove(Card.NINE);
    const nextMove2 = hand2.decideMove(Card.NINE);
    const nextMove3 = hand3.decideMove(Card.NINE);
    const nextMove4 = hand4.decideMove(Card.NINE);
    const nextMove5 = hand5.decideMove(Card.NINE);
    const nextMove6 = hand6.decideMove(Card.NINE);
    const nextMove7 = hand7.decideMove(Card.NINE);
    const nextMove8 = hand8.decideMove(Card.NINE);
    const nextMove9 = hand9.decideMove(Card.NINE);
    const nextMove10 = hand10.decideMove(Card.NINE);
    const nextMove11 = hand11.decideMove(Card.NINE);
    const nextMove12 = hand12.decideMove(Card.NINE);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
    expect(nextMove9).toEqual(Move.HIT);
    expect(nextMove10).toEqual(Move.HIT);
    expect(nextMove11).toEqual(Move.HIT);
    expect(nextMove12).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove1 = hand1.decideMove(Card.TEN);
    const nextMove2 = hand2.decideMove(Card.TEN);
    const nextMove3 = hand3.decideMove(Card.TEN);
    const nextMove4 = hand4.decideMove(Card.TEN);
    const nextMove5 = hand5.decideMove(Card.TEN);
    const nextMove6 = hand6.decideMove(Card.TEN);
    const nextMove7 = hand7.decideMove(Card.TEN);
    const nextMove8 = hand8.decideMove(Card.TEN);
    const nextMove9 = hand9.decideMove(Card.TEN);
    const nextMove10 = hand10.decideMove(Card.TEN);
    const nextMove11 = hand11.decideMove(Card.TEN);
    const nextMove12 = hand12.decideMove(Card.TEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
    expect(nextMove9).toEqual(Move.HIT);
    expect(nextMove10).toEqual(Move.HIT);
    expect(nextMove11).toEqual(Move.HIT);
    expect(nextMove12).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove1 = hand1.decideMove(Card.ACE);
    const nextMove2 = hand2.decideMove(Card.ACE);
    const nextMove3 = hand3.decideMove(Card.ACE);
    const nextMove4 = hand4.decideMove(Card.ACE);
    const nextMove5 = hand5.decideMove(Card.ACE);
    const nextMove6 = hand6.decideMove(Card.ACE);
    const nextMove7 = hand7.decideMove(Card.ACE);
    const nextMove8 = hand8.decideMove(Card.ACE);
    const nextMove9 = hand9.decideMove(Card.ACE);
    const nextMove10 = hand10.decideMove(Card.ACE);
    const nextMove11 = hand11.decideMove(Card.ACE);
    const nextMove12 = hand12.decideMove(Card.ACE);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
    expect(nextMove7).toEqual(Move.HIT);
    expect(nextMove8).toEqual(Move.HIT);
    expect(nextMove9).toEqual(Move.HIT);
    expect(nextMove10).toEqual(Move.HIT);
    expect(nextMove11).toEqual(Move.HIT);
    expect(nextMove12).toEqual(Move.HIT);
  });
});

describe('Hand: 2 7 // 3 6 // 4 5 // 5 4 // 6 3 // 7 2 (Hard 9)', () => {
  const hand1 = new Hand(Card.TWO, Card.SEVEN);
  const hand2 = new Hand(Card.THREE, Card.SIX);
  const hand3 = new Hand(Card.FOUR, Card.FIVE);
  const hand4 = new Hand(Card.FIVE, Card.FOUR);
  const hand5 = new Hand(Card.SIX, Card.THREE);
  const hand6 = new Hand(Card.SEVEN, Card.TWO);

  it('Dealer: 2', () => {
    const nextMove1 = hand1.decideMove(Card.TWO);
    const nextMove2 = hand2.decideMove(Card.TWO);
    const nextMove3 = hand3.decideMove(Card.TWO);
    const nextMove4 = hand4.decideMove(Card.TWO);
    const nextMove5 = hand5.decideMove(Card.TWO);
    const nextMove6 = hand6.decideMove(Card.TWO);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 3', () => {
    const nextMove1 = hand1.decideMove(Card.THREE);
    const nextMove2 = hand2.decideMove(Card.THREE);
    const nextMove3 = hand3.decideMove(Card.THREE);
    const nextMove4 = hand4.decideMove(Card.THREE);
    const nextMove5 = hand5.decideMove(Card.THREE);
    const nextMove6 = hand6.decideMove(Card.THREE);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const nextMove1 = hand1.decideMove(Card.FOUR);
    const nextMove2 = hand2.decideMove(Card.FOUR);
    const nextMove3 = hand3.decideMove(Card.FOUR);
    const nextMove4 = hand4.decideMove(Card.FOUR);
    const nextMove5 = hand5.decideMove(Card.FOUR);
    const nextMove6 = hand6.decideMove(Card.FOUR);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const nextMove1 = hand1.decideMove(Card.FIVE);
    const nextMove2 = hand2.decideMove(Card.FIVE);
    const nextMove3 = hand3.decideMove(Card.FIVE);
    const nextMove4 = hand4.decideMove(Card.FIVE);
    const nextMove5 = hand5.decideMove(Card.FIVE);
    const nextMove6 = hand6.decideMove(Card.FIVE);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const nextMove1 = hand1.decideMove(Card.SIX);
    const nextMove2 = hand2.decideMove(Card.SIX);
    const nextMove3 = hand3.decideMove(Card.SIX);
    const nextMove4 = hand4.decideMove(Card.SIX);
    const nextMove5 = hand5.decideMove(Card.SIX);
    const nextMove6 = hand6.decideMove(Card.SIX);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const nextMove1 = hand1.decideMove(Card.SEVEN);
    const nextMove2 = hand2.decideMove(Card.SEVEN);
    const nextMove3 = hand3.decideMove(Card.SEVEN);
    const nextMove4 = hand4.decideMove(Card.SEVEN);
    const nextMove5 = hand5.decideMove(Card.SEVEN);
    const nextMove6 = hand6.decideMove(Card.SEVEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove1 = hand1.decideMove(Card.EIGHT);
    const nextMove2 = hand2.decideMove(Card.EIGHT);
    const nextMove3 = hand3.decideMove(Card.EIGHT);
    const nextMove4 = hand4.decideMove(Card.EIGHT);
    const nextMove5 = hand5.decideMove(Card.EIGHT);
    const nextMove6 = hand6.decideMove(Card.EIGHT);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove1 = hand1.decideMove(Card.NINE);
    const nextMove2 = hand2.decideMove(Card.NINE);
    const nextMove3 = hand3.decideMove(Card.NINE);
    const nextMove4 = hand4.decideMove(Card.NINE);
    const nextMove5 = hand5.decideMove(Card.NINE);
    const nextMove6 = hand6.decideMove(Card.NINE);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove1 = hand1.decideMove(Card.TEN);
    const nextMove2 = hand2.decideMove(Card.TEN);
    const nextMove3 = hand3.decideMove(Card.TEN);
    const nextMove4 = hand4.decideMove(Card.TEN);
    const nextMove5 = hand5.decideMove(Card.TEN);
    const nextMove6 = hand6.decideMove(Card.TEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove1 = hand1.decideMove(Card.ACE);
    const nextMove2 = hand2.decideMove(Card.ACE);
    const nextMove3 = hand3.decideMove(Card.ACE);
    const nextMove4 = hand4.decideMove(Card.ACE);
    const nextMove5 = hand5.decideMove(Card.ACE);
    const nextMove6 = hand6.decideMove(Card.ACE);

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

  it('Dealer: 2', () => {
    const nextMove1 = hand1.decideMove(Card.TWO);
    const nextMove2 = hand2.decideMove(Card.TWO);
    const nextMove3 = hand3.decideMove(Card.TWO);
    const nextMove4 = hand4.decideMove(Card.TWO);
    const nextMove5 = hand5.decideMove(Card.TWO);
    const nextMove6 = hand6.decideMove(Card.TWO);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 3', () => {
    const nextMove1 = hand1.decideMove(Card.THREE);
    const nextMove2 = hand2.decideMove(Card.THREE);
    const nextMove3 = hand3.decideMove(Card.THREE);
    const nextMove4 = hand4.decideMove(Card.THREE);
    const nextMove5 = hand5.decideMove(Card.THREE);
    const nextMove6 = hand6.decideMove(Card.THREE);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 4', () => {
    const nextMove1 = hand1.decideMove(Card.FOUR);
    const nextMove2 = hand2.decideMove(Card.FOUR);
    const nextMove3 = hand3.decideMove(Card.FOUR);
    const nextMove4 = hand4.decideMove(Card.FOUR);
    const nextMove5 = hand5.decideMove(Card.FOUR);
    const nextMove6 = hand6.decideMove(Card.FOUR);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 5', () => {
    const nextMove1 = hand1.decideMove(Card.FIVE);
    const nextMove2 = hand2.decideMove(Card.FIVE);
    const nextMove3 = hand3.decideMove(Card.FIVE);
    const nextMove4 = hand4.decideMove(Card.FIVE);
    const nextMove5 = hand5.decideMove(Card.FIVE);
    const nextMove6 = hand6.decideMove(Card.FIVE);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 6', () => {
    const nextMove1 = hand1.decideMove(Card.SIX);
    const nextMove2 = hand2.decideMove(Card.SIX);
    const nextMove3 = hand3.decideMove(Card.SIX);
    const nextMove4 = hand4.decideMove(Card.SIX);
    const nextMove5 = hand5.decideMove(Card.SIX);
    const nextMove6 = hand6.decideMove(Card.SIX);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 7', () => {
    const nextMove1 = hand1.decideMove(Card.SEVEN);
    const nextMove2 = hand2.decideMove(Card.SEVEN);
    const nextMove3 = hand3.decideMove(Card.SEVEN);
    const nextMove4 = hand4.decideMove(Card.SEVEN);
    const nextMove5 = hand5.decideMove(Card.SEVEN);
    const nextMove6 = hand6.decideMove(Card.SEVEN);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 8', () => {
    const nextMove1 = hand1.decideMove(Card.EIGHT);
    const nextMove2 = hand2.decideMove(Card.EIGHT);
    const nextMove3 = hand3.decideMove(Card.EIGHT);
    const nextMove4 = hand4.decideMove(Card.EIGHT);
    const nextMove5 = hand5.decideMove(Card.EIGHT);
    const nextMove6 = hand6.decideMove(Card.EIGHT);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 9', () => {
    const nextMove1 = hand1.decideMove(Card.NINE);
    const nextMove2 = hand2.decideMove(Card.NINE);
    const nextMove3 = hand3.decideMove(Card.NINE);
    const nextMove4 = hand4.decideMove(Card.NINE);
    const nextMove5 = hand5.decideMove(Card.NINE);
    const nextMove6 = hand6.decideMove(Card.NINE);

    expect(nextMove1).toEqual(Move.DOUBLEDOWN);
    expect(nextMove2).toEqual(Move.DOUBLEDOWN);
    expect(nextMove3).toEqual(Move.DOUBLEDOWN);
    expect(nextMove4).toEqual(Move.DOUBLEDOWN);
    expect(nextMove5).toEqual(Move.DOUBLEDOWN);
    expect(nextMove6).toEqual(Move.DOUBLEDOWN);
  });

  it('Dealer: 10', () => {
    const nextMove1 = hand1.decideMove(Card.TEN);
    const nextMove2 = hand2.decideMove(Card.TEN);
    const nextMove3 = hand3.decideMove(Card.TEN);
    const nextMove4 = hand4.decideMove(Card.TEN);
    const nextMove5 = hand5.decideMove(Card.TEN);
    const nextMove6 = hand6.decideMove(Card.TEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove1 = hand1.decideMove(Card.ACE);
    const nextMove2 = hand2.decideMove(Card.ACE);
    const nextMove3 = hand3.decideMove(Card.ACE);
    const nextMove4 = hand4.decideMove(Card.ACE);
    const nextMove5 = hand5.decideMove(Card.ACE);
    const nextMove6 = hand6.decideMove(Card.ACE);

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

  it('Dealer: 2', () => {
    const nextMove1 = hand1.decideMove(Card.TWO);
    const nextMove2 = hand2.decideMove(Card.TWO);
    const nextMove3 = hand3.decideMove(Card.TWO);
    const nextMove4 = hand4.decideMove(Card.TWO);
    const nextMove5 = hand5.decideMove(Card.TWO);
    const nextMove6 = hand6.decideMove(Card.TWO);
    const nextMove7 = hand7.decideMove(Card.TWO);
    const nextMove8 = hand8.decideMove(Card.TWO);

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
    const nextMove1 = hand1.decideMove(Card.THREE);
    const nextMove2 = hand2.decideMove(Card.THREE);
    const nextMove3 = hand3.decideMove(Card.THREE);
    const nextMove4 = hand4.decideMove(Card.THREE);
    const nextMove5 = hand5.decideMove(Card.THREE);
    const nextMove6 = hand6.decideMove(Card.THREE);
    const nextMove7 = hand7.decideMove(Card.THREE);
    const nextMove8 = hand8.decideMove(Card.THREE);

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
    const nextMove1 = hand1.decideMove(Card.FOUR);
    const nextMove2 = hand2.decideMove(Card.FOUR);
    const nextMove3 = hand3.decideMove(Card.FOUR);
    const nextMove4 = hand4.decideMove(Card.FOUR);
    const nextMove5 = hand5.decideMove(Card.FOUR);
    const nextMove6 = hand6.decideMove(Card.FOUR);
    const nextMove7 = hand7.decideMove(Card.FOUR);
    const nextMove8 = hand8.decideMove(Card.FOUR);

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
    const nextMove1 = hand1.decideMove(Card.FIVE);
    const nextMove2 = hand2.decideMove(Card.FIVE);
    const nextMove3 = hand3.decideMove(Card.FIVE);
    const nextMove4 = hand4.decideMove(Card.FIVE);
    const nextMove5 = hand5.decideMove(Card.FIVE);
    const nextMove6 = hand6.decideMove(Card.FIVE);
    const nextMove7 = hand7.decideMove(Card.FIVE);
    const nextMove8 = hand8.decideMove(Card.FIVE);

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
    const nextMove1 = hand1.decideMove(Card.SIX);
    const nextMove2 = hand2.decideMove(Card.SIX);
    const nextMove3 = hand3.decideMove(Card.SIX);
    const nextMove4 = hand4.decideMove(Card.SIX);
    const nextMove5 = hand5.decideMove(Card.SIX);
    const nextMove6 = hand6.decideMove(Card.SIX);
    const nextMove7 = hand7.decideMove(Card.SIX);
    const nextMove8 = hand8.decideMove(Card.SIX);

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
    const nextMove1 = hand1.decideMove(Card.SEVEN);
    const nextMove2 = hand2.decideMove(Card.SEVEN);
    const nextMove3 = hand3.decideMove(Card.SEVEN);
    const nextMove4 = hand4.decideMove(Card.SEVEN);
    const nextMove5 = hand5.decideMove(Card.SEVEN);
    const nextMove6 = hand6.decideMove(Card.SEVEN);
    const nextMove7 = hand7.decideMove(Card.SEVEN);
    const nextMove8 = hand8.decideMove(Card.SEVEN);

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
    const nextMove1 = hand1.decideMove(Card.EIGHT);
    const nextMove2 = hand2.decideMove(Card.EIGHT);
    const nextMove3 = hand3.decideMove(Card.EIGHT);
    const nextMove4 = hand4.decideMove(Card.EIGHT);
    const nextMove5 = hand5.decideMove(Card.EIGHT);
    const nextMove6 = hand6.decideMove(Card.EIGHT);
    const nextMove7 = hand7.decideMove(Card.EIGHT);
    const nextMove8 = hand8.decideMove(Card.EIGHT);

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
    const nextMove1 = hand1.decideMove(Card.NINE);
    const nextMove2 = hand2.decideMove(Card.NINE);
    const nextMove3 = hand3.decideMove(Card.NINE);
    const nextMove4 = hand4.decideMove(Card.NINE);
    const nextMove5 = hand5.decideMove(Card.NINE);
    const nextMove6 = hand6.decideMove(Card.NINE);
    const nextMove7 = hand7.decideMove(Card.NINE);
    const nextMove8 = hand8.decideMove(Card.NINE);

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
    const nextMove1 = hand1.decideMove(Card.TEN);
    const nextMove2 = hand2.decideMove(Card.TEN);
    const nextMove3 = hand3.decideMove(Card.TEN);
    const nextMove4 = hand4.decideMove(Card.TEN);
    const nextMove5 = hand5.decideMove(Card.TEN);
    const nextMove6 = hand6.decideMove(Card.TEN);
    const nextMove7 = hand7.decideMove(Card.TEN);
    const nextMove8 = hand8.decideMove(Card.TEN);

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
    const nextMove1 = hand1.decideMove(Card.ACE);
    const nextMove2 = hand2.decideMove(Card.ACE);
    const nextMove3 = hand3.decideMove(Card.ACE);
    const nextMove4 = hand4.decideMove(Card.ACE);
    const nextMove5 = hand5.decideMove(Card.ACE);
    const nextMove6 = hand6.decideMove(Card.ACE);
    const nextMove7 = hand7.decideMove(Card.ACE);
    const nextMove8 = hand8.decideMove(Card.ACE);

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

  it('Dealer: 2', () => {
    const nextMove1 = hand1.decideMove(Card.TWO);
    const nextMove2 = hand2.decideMove(Card.TWO);
    const nextMove3 = hand3.decideMove(Card.TWO);
    const nextMove4 = hand4.decideMove(Card.TWO);
    const nextMove5 = hand5.decideMove(Card.TWO);
    const nextMove6 = hand6.decideMove(Card.TWO);
    const nextMove7 = hand7.decideMove(Card.TWO);
    const nextMove8 = hand8.decideMove(Card.TWO);

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
    const nextMove1 = hand1.decideMove(Card.THREE);
    const nextMove2 = hand2.decideMove(Card.THREE);
    const nextMove3 = hand3.decideMove(Card.THREE);
    const nextMove4 = hand4.decideMove(Card.THREE);
    const nextMove5 = hand5.decideMove(Card.THREE);
    const nextMove6 = hand6.decideMove(Card.THREE);
    const nextMove7 = hand7.decideMove(Card.THREE);
    const nextMove8 = hand8.decideMove(Card.THREE);

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
    const nextMove1 = hand1.decideMove(Card.FOUR);
    const nextMove2 = hand2.decideMove(Card.FOUR);
    const nextMove3 = hand3.decideMove(Card.FOUR);
    const nextMove4 = hand4.decideMove(Card.FOUR);
    const nextMove5 = hand5.decideMove(Card.FOUR);
    const nextMove6 = hand6.decideMove(Card.FOUR);
    const nextMove7 = hand7.decideMove(Card.FOUR);
    const nextMove8 = hand8.decideMove(Card.FOUR);

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
    const nextMove1 = hand1.decideMove(Card.FIVE);
    const nextMove2 = hand2.decideMove(Card.FIVE);
    const nextMove3 = hand3.decideMove(Card.FIVE);
    const nextMove4 = hand4.decideMove(Card.FIVE);
    const nextMove5 = hand5.decideMove(Card.FIVE);
    const nextMove6 = hand6.decideMove(Card.FIVE);
    const nextMove7 = hand7.decideMove(Card.FIVE);
    const nextMove8 = hand8.decideMove(Card.FIVE);

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
    const nextMove1 = hand1.decideMove(Card.SIX);
    const nextMove2 = hand2.decideMove(Card.SIX);
    const nextMove3 = hand3.decideMove(Card.SIX);
    const nextMove4 = hand4.decideMove(Card.SIX);
    const nextMove5 = hand5.decideMove(Card.SIX);
    const nextMove6 = hand6.decideMove(Card.SIX);
    const nextMove7 = hand7.decideMove(Card.SIX);
    const nextMove8 = hand8.decideMove(Card.SIX);

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
    const nextMove1 = hand1.decideMove(Card.SEVEN);
    const nextMove2 = hand2.decideMove(Card.SEVEN);
    const nextMove3 = hand3.decideMove(Card.SEVEN);
    const nextMove4 = hand4.decideMove(Card.SEVEN);
    const nextMove5 = hand5.decideMove(Card.SEVEN);
    const nextMove6 = hand6.decideMove(Card.SEVEN);
    const nextMove7 = hand7.decideMove(Card.SEVEN);
    const nextMove8 = hand8.decideMove(Card.SEVEN);

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
    const nextMove1 = hand1.decideMove(Card.EIGHT);
    const nextMove2 = hand2.decideMove(Card.EIGHT);
    const nextMove3 = hand3.decideMove(Card.EIGHT);
    const nextMove4 = hand4.decideMove(Card.EIGHT);
    const nextMove5 = hand5.decideMove(Card.EIGHT);
    const nextMove6 = hand6.decideMove(Card.EIGHT);
    const nextMove7 = hand7.decideMove(Card.EIGHT);
    const nextMove8 = hand8.decideMove(Card.EIGHT);

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
    const nextMove1 = hand1.decideMove(Card.NINE);
    const nextMove2 = hand2.decideMove(Card.NINE);
    const nextMove3 = hand3.decideMove(Card.NINE);
    const nextMove4 = hand4.decideMove(Card.NINE);
    const nextMove5 = hand5.decideMove(Card.NINE);
    const nextMove6 = hand6.decideMove(Card.NINE);
    const nextMove7 = hand7.decideMove(Card.NINE);
    const nextMove8 = hand8.decideMove(Card.NINE);

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
    const nextMove1 = hand1.decideMove(Card.TEN);
    const nextMove2 = hand2.decideMove(Card.TEN);
    const nextMove3 = hand3.decideMove(Card.TEN);
    const nextMove4 = hand4.decideMove(Card.TEN);
    const nextMove5 = hand5.decideMove(Card.TEN);
    const nextMove6 = hand6.decideMove(Card.TEN);
    const nextMove7 = hand7.decideMove(Card.TEN);
    const nextMove8 = hand8.decideMove(Card.TEN);

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
    const nextMove1 = hand1.decideMove(Card.ACE);
    const nextMove2 = hand2.decideMove(Card.ACE);
    const nextMove3 = hand3.decideMove(Card.ACE);
    const nextMove4 = hand4.decideMove(Card.ACE);
    const nextMove5 = hand5.decideMove(Card.ACE);
    const nextMove6 = hand6.decideMove(Card.ACE);
    const nextMove7 = hand7.decideMove(Card.ACE);
    const nextMove8 = hand8.decideMove(Card.ACE);

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

  it('Dealer: 2', () => {
    const nextMove1 = hand1.decideMove(Card.TWO);
    const nextMove2 = hand2.decideMove(Card.TWO);
    const nextMove3 = hand3.decideMove(Card.TWO);
    const nextMove4 = hand4.decideMove(Card.TWO);
    const nextMove5 = hand5.decideMove(Card.TWO);
    const nextMove6 = hand6.decideMove(Card.TWO);
    const nextMove7 = hand7.decideMove(Card.TWO);
    const nextMove8 = hand8.decideMove(Card.TWO);

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
    const nextMove1 = hand1.decideMove(Card.THREE);
    const nextMove2 = hand2.decideMove(Card.THREE);
    const nextMove3 = hand3.decideMove(Card.THREE);
    const nextMove4 = hand4.decideMove(Card.THREE);
    const nextMove5 = hand5.decideMove(Card.THREE);
    const nextMove6 = hand6.decideMove(Card.THREE);
    const nextMove7 = hand7.decideMove(Card.THREE);
    const nextMove8 = hand8.decideMove(Card.THREE);

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
    const nextMove1 = hand1.decideMove(Card.FOUR);
    const nextMove2 = hand2.decideMove(Card.FOUR);
    const nextMove3 = hand3.decideMove(Card.FOUR);
    const nextMove4 = hand4.decideMove(Card.FOUR);
    const nextMove5 = hand5.decideMove(Card.FOUR);
    const nextMove6 = hand6.decideMove(Card.FOUR);
    const nextMove7 = hand7.decideMove(Card.FOUR);
    const nextMove8 = hand8.decideMove(Card.FOUR);

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
    const nextMove1 = hand1.decideMove(Card.FIVE);
    const nextMove2 = hand2.decideMove(Card.FIVE);
    const nextMove3 = hand3.decideMove(Card.FIVE);
    const nextMove4 = hand4.decideMove(Card.FIVE);
    const nextMove5 = hand5.decideMove(Card.FIVE);
    const nextMove6 = hand6.decideMove(Card.FIVE);
    const nextMove7 = hand7.decideMove(Card.FIVE);
    const nextMove8 = hand8.decideMove(Card.FIVE);

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
    const nextMove1 = hand1.decideMove(Card.SIX);
    const nextMove2 = hand2.decideMove(Card.SIX);
    const nextMove3 = hand3.decideMove(Card.SIX);
    const nextMove4 = hand4.decideMove(Card.SIX);
    const nextMove5 = hand5.decideMove(Card.SIX);
    const nextMove6 = hand6.decideMove(Card.SIX);
    const nextMove7 = hand7.decideMove(Card.SIX);
    const nextMove8 = hand8.decideMove(Card.SIX);

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
    const nextMove1 = hand1.decideMove(Card.SEVEN);
    const nextMove2 = hand2.decideMove(Card.SEVEN);
    const nextMove3 = hand3.decideMove(Card.SEVEN);
    const nextMove4 = hand4.decideMove(Card.SEVEN);
    const nextMove5 = hand5.decideMove(Card.SEVEN);
    const nextMove6 = hand6.decideMove(Card.SEVEN);
    const nextMove7 = hand7.decideMove(Card.SEVEN);
    const nextMove8 = hand8.decideMove(Card.SEVEN);

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
    const nextMove1 = hand1.decideMove(Card.EIGHT);
    const nextMove2 = hand2.decideMove(Card.EIGHT);
    const nextMove3 = hand3.decideMove(Card.EIGHT);
    const nextMove4 = hand4.decideMove(Card.EIGHT);
    const nextMove5 = hand5.decideMove(Card.EIGHT);
    const nextMove6 = hand6.decideMove(Card.EIGHT);
    const nextMove7 = hand7.decideMove(Card.EIGHT);
    const nextMove8 = hand8.decideMove(Card.EIGHT);

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
    const nextMove1 = hand1.decideMove(Card.NINE);
    const nextMove2 = hand2.decideMove(Card.NINE);
    const nextMove3 = hand3.decideMove(Card.NINE);
    const nextMove4 = hand4.decideMove(Card.NINE);
    const nextMove5 = hand5.decideMove(Card.NINE);
    const nextMove6 = hand6.decideMove(Card.NINE);
    const nextMove7 = hand7.decideMove(Card.NINE);
    const nextMove8 = hand8.decideMove(Card.NINE);

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
    const nextMove1 = hand1.decideMove(Card.TEN);
    const nextMove2 = hand2.decideMove(Card.TEN);
    const nextMove3 = hand3.decideMove(Card.TEN);
    const nextMove4 = hand4.decideMove(Card.TEN);
    const nextMove5 = hand5.decideMove(Card.TEN);
    const nextMove6 = hand6.decideMove(Card.TEN);
    const nextMove7 = hand7.decideMove(Card.TEN);
    const nextMove8 = hand8.decideMove(Card.TEN);

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
    const nextMove1 = hand1.decideMove(Card.ACE);
    const nextMove2 = hand2.decideMove(Card.ACE);
    const nextMove3 = hand3.decideMove(Card.ACE);
    const nextMove4 = hand4.decideMove(Card.ACE);
    const nextMove5 = hand5.decideMove(Card.ACE);
    const nextMove6 = hand6.decideMove(Card.ACE);
    const nextMove7 = hand7.decideMove(Card.ACE);
    const nextMove8 = hand8.decideMove(Card.ACE);

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

  it('Dealer: 2', () => {
    const nextMove1 = hand1.decideMove(Card.TWO);
    const nextMove2 = hand2.decideMove(Card.TWO);
    const nextMove3 = hand3.decideMove(Card.TWO);
    const nextMove4 = hand4.decideMove(Card.TWO);
    const nextMove5 = hand5.decideMove(Card.TWO);
    const nextMove6 = hand6.decideMove(Card.TWO);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const nextMove1 = hand1.decideMove(Card.THREE);
    const nextMove2 = hand2.decideMove(Card.THREE);
    const nextMove3 = hand3.decideMove(Card.THREE);
    const nextMove4 = hand4.decideMove(Card.THREE);
    const nextMove5 = hand5.decideMove(Card.THREE);
    const nextMove6 = hand6.decideMove(Card.THREE);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const nextMove1 = hand1.decideMove(Card.FOUR);
    const nextMove2 = hand2.decideMove(Card.FOUR);
    const nextMove3 = hand3.decideMove(Card.FOUR);
    const nextMove4 = hand4.decideMove(Card.FOUR);
    const nextMove5 = hand5.decideMove(Card.FOUR);
    const nextMove6 = hand6.decideMove(Card.FOUR);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const nextMove1 = hand1.decideMove(Card.FIVE);
    const nextMove2 = hand2.decideMove(Card.FIVE);
    const nextMove3 = hand3.decideMove(Card.FIVE);
    const nextMove4 = hand4.decideMove(Card.FIVE);
    const nextMove5 = hand5.decideMove(Card.FIVE);
    const nextMove6 = hand6.decideMove(Card.FIVE);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const nextMove1 = hand1.decideMove(Card.SIX);
    const nextMove2 = hand2.decideMove(Card.SIX);
    const nextMove3 = hand3.decideMove(Card.SIX);
    const nextMove4 = hand4.decideMove(Card.SIX);
    const nextMove5 = hand5.decideMove(Card.SIX);
    const nextMove6 = hand6.decideMove(Card.SIX);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const nextMove1 = hand1.decideMove(Card.SEVEN);
    const nextMove2 = hand2.decideMove(Card.SEVEN);
    const nextMove3 = hand3.decideMove(Card.SEVEN);
    const nextMove4 = hand4.decideMove(Card.SEVEN);
    const nextMove5 = hand5.decideMove(Card.SEVEN);
    const nextMove6 = hand6.decideMove(Card.SEVEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove1 = hand1.decideMove(Card.EIGHT);
    const nextMove2 = hand2.decideMove(Card.EIGHT);
    const nextMove3 = hand3.decideMove(Card.EIGHT);
    const nextMove4 = hand4.decideMove(Card.EIGHT);
    const nextMove5 = hand5.decideMove(Card.EIGHT);
    const nextMove6 = hand6.decideMove(Card.EIGHT);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove1 = hand1.decideMove(Card.NINE);
    const nextMove2 = hand2.decideMove(Card.NINE);
    const nextMove3 = hand3.decideMove(Card.NINE);
    const nextMove4 = hand4.decideMove(Card.NINE);
    const nextMove5 = hand5.decideMove(Card.NINE);
    const nextMove6 = hand6.decideMove(Card.NINE);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove1 = hand1.decideMove(Card.TEN);
    const nextMove2 = hand2.decideMove(Card.TEN);
    const nextMove3 = hand3.decideMove(Card.TEN);
    const nextMove4 = hand4.decideMove(Card.TEN);
    const nextMove5 = hand5.decideMove(Card.TEN);
    const nextMove6 = hand6.decideMove(Card.TEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove1 = hand1.decideMove(Card.ACE);
    const nextMove2 = hand2.decideMove(Card.ACE);
    const nextMove3 = hand3.decideMove(Card.ACE);
    const nextMove4 = hand4.decideMove(Card.ACE);
    const nextMove5 = hand5.decideMove(Card.ACE);
    const nextMove6 = hand6.decideMove(Card.ACE);

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

  it('Dealer: 2', () => {
    const nextMove1 = hand1.decideMove(Card.TWO);
    const nextMove2 = hand2.decideMove(Card.TWO);
    const nextMove3 = hand3.decideMove(Card.TWO);
    const nextMove4 = hand4.decideMove(Card.TWO);
    const nextMove5 = hand5.decideMove(Card.TWO);
    const nextMove6 = hand6.decideMove(Card.TWO);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const nextMove1 = hand1.decideMove(Card.THREE);
    const nextMove2 = hand2.decideMove(Card.THREE);
    const nextMove3 = hand3.decideMove(Card.THREE);
    const nextMove4 = hand4.decideMove(Card.THREE);
    const nextMove5 = hand5.decideMove(Card.THREE);
    const nextMove6 = hand6.decideMove(Card.THREE);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const nextMove1 = hand1.decideMove(Card.FOUR);
    const nextMove2 = hand2.decideMove(Card.FOUR);
    const nextMove3 = hand3.decideMove(Card.FOUR);
    const nextMove4 = hand4.decideMove(Card.FOUR);
    const nextMove5 = hand5.decideMove(Card.FOUR);
    const nextMove6 = hand6.decideMove(Card.FOUR);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const nextMove1 = hand1.decideMove(Card.FIVE);
    const nextMove2 = hand2.decideMove(Card.FIVE);
    const nextMove3 = hand3.decideMove(Card.FIVE);
    const nextMove4 = hand4.decideMove(Card.FIVE);
    const nextMove5 = hand5.decideMove(Card.FIVE);
    const nextMove6 = hand6.decideMove(Card.FIVE);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const nextMove1 = hand1.decideMove(Card.SIX);
    const nextMove2 = hand2.decideMove(Card.SIX);
    const nextMove3 = hand3.decideMove(Card.SIX);
    const nextMove4 = hand4.decideMove(Card.SIX);
    const nextMove5 = hand5.decideMove(Card.SIX);
    const nextMove6 = hand6.decideMove(Card.SIX);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const nextMove1 = hand1.decideMove(Card.SEVEN);
    const nextMove2 = hand2.decideMove(Card.SEVEN);
    const nextMove3 = hand3.decideMove(Card.SEVEN);
    const nextMove4 = hand4.decideMove(Card.SEVEN);
    const nextMove5 = hand5.decideMove(Card.SEVEN);
    const nextMove6 = hand6.decideMove(Card.SEVEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove1 = hand1.decideMove(Card.EIGHT);
    const nextMove2 = hand2.decideMove(Card.EIGHT);
    const nextMove3 = hand3.decideMove(Card.EIGHT);
    const nextMove4 = hand4.decideMove(Card.EIGHT);
    const nextMove5 = hand5.decideMove(Card.EIGHT);
    const nextMove6 = hand6.decideMove(Card.EIGHT);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove1 = hand1.decideMove(Card.NINE);
    const nextMove2 = hand2.decideMove(Card.NINE);
    const nextMove3 = hand3.decideMove(Card.NINE);
    const nextMove4 = hand4.decideMove(Card.NINE);
    const nextMove5 = hand5.decideMove(Card.NINE);
    const nextMove6 = hand6.decideMove(Card.NINE);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove1 = hand1.decideMove(Card.TEN);
    const nextMove2 = hand2.decideMove(Card.TEN);
    const nextMove3 = hand3.decideMove(Card.TEN);
    const nextMove4 = hand4.decideMove(Card.TEN);
    const nextMove5 = hand5.decideMove(Card.TEN);
    const nextMove6 = hand6.decideMove(Card.TEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
    expect(nextMove5).toEqual(Move.HIT);
    expect(nextMove6).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove1 = hand1.decideMove(Card.ACE);
    const nextMove2 = hand2.decideMove(Card.ACE);
    const nextMove3 = hand3.decideMove(Card.ACE);
    const nextMove4 = hand4.decideMove(Card.ACE);
    const nextMove5 = hand5.decideMove(Card.ACE);
    const nextMove6 = hand6.decideMove(Card.ACE);

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

  it('Dealer: 2', () => {
    const nextMove1 = hand1.decideMove(Card.TWO);
    const nextMove2 = hand2.decideMove(Card.TWO);
    const nextMove3 = hand3.decideMove(Card.TWO);
    const nextMove4 = hand4.decideMove(Card.TWO);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 3', () => {
    const nextMove1 = hand1.decideMove(Card.THREE);
    const nextMove2 = hand2.decideMove(Card.THREE);
    const nextMove3 = hand3.decideMove(Card.THREE);
    const nextMove4 = hand4.decideMove(Card.THREE);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 4', () => {
    const nextMove1 = hand1.decideMove(Card.FOUR);
    const nextMove2 = hand2.decideMove(Card.FOUR);
    const nextMove3 = hand3.decideMove(Card.FOUR);
    const nextMove4 = hand4.decideMove(Card.FOUR);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 5', () => {
    const nextMove1 = hand1.decideMove(Card.FIVE);
    const nextMove2 = hand2.decideMove(Card.FIVE);
    const nextMove3 = hand3.decideMove(Card.FIVE);
    const nextMove4 = hand4.decideMove(Card.FIVE);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 6', () => {
    const nextMove1 = hand1.decideMove(Card.SIX);
    const nextMove2 = hand2.decideMove(Card.SIX);
    const nextMove3 = hand3.decideMove(Card.SIX);
    const nextMove4 = hand4.decideMove(Card.SIX);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
  });

  it('Dealer: 7', () => {
    const nextMove1 = hand1.decideMove(Card.SEVEN);
    const nextMove2 = hand2.decideMove(Card.SEVEN);
    const nextMove3 = hand3.decideMove(Card.SEVEN);
    const nextMove4 = hand4.decideMove(Card.SEVEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 8', () => {
    const nextMove1 = hand1.decideMove(Card.EIGHT);
    const nextMove2 = hand2.decideMove(Card.EIGHT);
    const nextMove3 = hand3.decideMove(Card.EIGHT);
    const nextMove4 = hand4.decideMove(Card.EIGHT);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 9', () => {
    const nextMove1 = hand1.decideMove(Card.NINE);
    const nextMove2 = hand2.decideMove(Card.NINE);
    const nextMove3 = hand3.decideMove(Card.NINE);
    const nextMove4 = hand4.decideMove(Card.NINE);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: 10', () => {
    const nextMove1 = hand1.decideMove(Card.TEN);
    const nextMove2 = hand2.decideMove(Card.TEN);
    const nextMove3 = hand3.decideMove(Card.TEN);
    const nextMove4 = hand4.decideMove(Card.TEN);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });

  it('Dealer: A', () => {
    const nextMove1 = hand1.decideMove(Card.ACE);
    const nextMove2 = hand2.decideMove(Card.ACE);
    const nextMove3 = hand3.decideMove(Card.ACE);
    const nextMove4 = hand4.decideMove(Card.ACE);

    expect(nextMove1).toEqual(Move.HIT);
    expect(nextMove2).toEqual(Move.HIT);
    expect(nextMove3).toEqual(Move.HIT);
    expect(nextMove4).toEqual(Move.HIT);
  });
});

describe('Hand: 7 10 // 8 9 // 8 10 // 9 8 // 9 10 // 10 7 // 10 8 // 10 9 (Hard 17 or more)', () => {
  const hand1 = new Hand(Card.SEVEN, Card.TEN);
  const hand2 = new Hand(Card.EIGHT, Card.NINE);
  const hand3 = new Hand(Card.EIGHT, Card.TEN);
  const hand4 = new Hand(Card.NINE, Card.EIGHT);
  const hand5 = new Hand(Card.NINE, Card.TEN);
  const hand6 = new Hand(Card.TEN, Card.SEVEN);
  const hand7 = new Hand(Card.TEN, Card.EIGHT);
  const hand8 = new Hand(Card.TEN, Card.NINE);

  it('Dealer: 2', () => {
    const nextMove1 = hand1.decideMove(Card.TWO);
    const nextMove2 = hand2.decideMove(Card.TWO);
    const nextMove3 = hand3.decideMove(Card.TWO);
    const nextMove4 = hand4.decideMove(Card.TWO);
    const nextMove5 = hand5.decideMove(Card.TWO);
    const nextMove6 = hand6.decideMove(Card.TWO);
    const nextMove7 = hand7.decideMove(Card.TWO);
    const nextMove8 = hand8.decideMove(Card.TWO);

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
    const nextMove1 = hand1.decideMove(Card.THREE);
    const nextMove2 = hand2.decideMove(Card.THREE);
    const nextMove3 = hand3.decideMove(Card.THREE);
    const nextMove4 = hand4.decideMove(Card.THREE);
    const nextMove5 = hand5.decideMove(Card.THREE);
    const nextMove6 = hand6.decideMove(Card.THREE);
    const nextMove7 = hand7.decideMove(Card.THREE);
    const nextMove8 = hand8.decideMove(Card.THREE);

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
    const nextMove1 = hand1.decideMove(Card.FOUR);
    const nextMove2 = hand2.decideMove(Card.FOUR);
    const nextMove3 = hand3.decideMove(Card.FOUR);
    const nextMove4 = hand4.decideMove(Card.FOUR);
    const nextMove5 = hand5.decideMove(Card.FOUR);
    const nextMove6 = hand6.decideMove(Card.FOUR);
    const nextMove7 = hand7.decideMove(Card.FOUR);
    const nextMove8 = hand8.decideMove(Card.FOUR);

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
    const nextMove1 = hand1.decideMove(Card.FIVE);
    const nextMove2 = hand2.decideMove(Card.FIVE);
    const nextMove3 = hand3.decideMove(Card.FIVE);
    const nextMove4 = hand4.decideMove(Card.FIVE);
    const nextMove5 = hand5.decideMove(Card.FIVE);
    const nextMove6 = hand6.decideMove(Card.FIVE);
    const nextMove7 = hand7.decideMove(Card.FIVE);
    const nextMove8 = hand8.decideMove(Card.FIVE);

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
    const nextMove1 = hand1.decideMove(Card.SIX);
    const nextMove2 = hand2.decideMove(Card.SIX);
    const nextMove3 = hand3.decideMove(Card.SIX);
    const nextMove4 = hand4.decideMove(Card.SIX);
    const nextMove5 = hand5.decideMove(Card.SIX);
    const nextMove6 = hand6.decideMove(Card.SIX);
    const nextMove7 = hand7.decideMove(Card.SIX);
    const nextMove8 = hand8.decideMove(Card.SIX);

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
    const nextMove1 = hand1.decideMove(Card.SEVEN);
    const nextMove2 = hand2.decideMove(Card.SEVEN);
    const nextMove3 = hand3.decideMove(Card.SEVEN);
    const nextMove4 = hand4.decideMove(Card.SEVEN);
    const nextMove5 = hand5.decideMove(Card.SEVEN);
    const nextMove6 = hand6.decideMove(Card.SEVEN);
    const nextMove7 = hand7.decideMove(Card.SEVEN);
    const nextMove8 = hand8.decideMove(Card.SEVEN);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 8', () => {
    const nextMove1 = hand1.decideMove(Card.EIGHT);
    const nextMove2 = hand2.decideMove(Card.EIGHT);
    const nextMove3 = hand3.decideMove(Card.EIGHT);
    const nextMove4 = hand4.decideMove(Card.EIGHT);
    const nextMove5 = hand5.decideMove(Card.EIGHT);
    const nextMove6 = hand6.decideMove(Card.EIGHT);
    const nextMove7 = hand7.decideMove(Card.EIGHT);
    const nextMove8 = hand8.decideMove(Card.EIGHT);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 9', () => {
    const nextMove1 = hand1.decideMove(Card.NINE);
    const nextMove2 = hand2.decideMove(Card.NINE);
    const nextMove3 = hand3.decideMove(Card.NINE);
    const nextMove4 = hand4.decideMove(Card.NINE);
    const nextMove5 = hand5.decideMove(Card.NINE);
    const nextMove6 = hand6.decideMove(Card.NINE);
    const nextMove7 = hand7.decideMove(Card.NINE);
    const nextMove8 = hand8.decideMove(Card.NINE);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: 10', () => {
    const nextMove1 = hand1.decideMove(Card.TEN);
    const nextMove2 = hand2.decideMove(Card.TEN);
    const nextMove3 = hand3.decideMove(Card.TEN);
    const nextMove4 = hand4.decideMove(Card.TEN);
    const nextMove5 = hand5.decideMove(Card.TEN);
    const nextMove6 = hand6.decideMove(Card.TEN);
    const nextMove7 = hand7.decideMove(Card.TEN);
    const nextMove8 = hand8.decideMove(Card.TEN);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });

  it('Dealer: A', () => {
    const nextMove1 = hand1.decideMove(Card.ACE);
    const nextMove2 = hand2.decideMove(Card.ACE);
    const nextMove3 = hand3.decideMove(Card.ACE);
    const nextMove4 = hand4.decideMove(Card.ACE);
    const nextMove5 = hand5.decideMove(Card.ACE);
    const nextMove6 = hand6.decideMove(Card.ACE);
    const nextMove7 = hand7.decideMove(Card.ACE);
    const nextMove8 = hand8.decideMove(Card.ACE);

    expect(nextMove1).toEqual(Move.STAND);
    expect(nextMove2).toEqual(Move.STAND);
    expect(nextMove3).toEqual(Move.STAND);
    expect(nextMove4).toEqual(Move.STAND);
    expect(nextMove5).toEqual(Move.STAND);
    expect(nextMove6).toEqual(Move.STAND);
    expect(nextMove7).toEqual(Move.STAND);
    expect(nextMove8).toEqual(Move.STAND);
  });
});
