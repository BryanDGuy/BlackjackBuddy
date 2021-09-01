/**
 * @format
 */
import 'react-native';
import Card from '../../src/lib/Card.enum';
import Hand from '../../src/lib/Hand';

describe('Hand: 2 2 (Pair 2)', () => {
  const hand = new Hand(Card.TWO, Card.TWO);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Pair 2');
  });
});

describe('Hand: 3 3 (Pair 3)', () => {
  const hand = new Hand(Card.THREE, Card.THREE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Pair 3');
  });
});

describe('Hand: 4 4 (Pair 4)', () => {
  const hand = new Hand(Card.FOUR, Card.FOUR);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Pair 4');
  });
});

describe('Hand: 5 5 (Pair 5)', () => {
  const hand = new Hand(Card.FIVE, Card.FIVE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Pair 5');
  });
});

describe('Hand: 6 6 (Pair 6)', () => {
  const hand = new Hand(Card.SIX, Card.SIX);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Pair 6');
  });
});

describe('Hand: 7 7 (Pair 7)', () => {
  const hand = new Hand(Card.SEVEN, Card.SEVEN);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Pair 7');
  });
});

describe('Hand: 8 8 (Pair 8)', () => {
  const hand = new Hand(Card.EIGHT, Card.EIGHT);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Pair 8');
  });
});

describe('Hand: 9 9 (Pair 9)', () => {
  const hand = new Hand(Card.NINE, Card.NINE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Pair 9');
  });
});

describe('Hand: 10 10 (Pair 10)', () => {
  const hand = new Hand(Card.TEN, Card.TEN);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Pair 10');
  });
});

describe('Hand: A A (Pair Ace)', () => {
  const hand = new Hand(Card.ACE, Card.ACE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Pair Ace');
  });
});

describe('Hand: A 2 (Soft 2)', () => {
  const hand = new Hand(Card.ACE, Card.TWO);
  const inverseHand = new Hand(Card.TWO, Card.ACE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Soft 2');
    expect(inverseHand.getName()).toEqual('Soft 2');
  });
});

describe('Hand: A 3 (Soft 3)', () => {
  const hand = new Hand(Card.ACE, Card.THREE);
  const inverseHand = new Hand(Card.THREE, Card.ACE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Soft 3');
    expect(inverseHand.getName()).toEqual('Soft 3');
  });
});

describe('Hand: A 4 (Soft 4)', () => {
  const hand = new Hand(Card.ACE, Card.FOUR);
  const inverseHand = new Hand(Card.FOUR, Card.ACE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Soft 4');
    expect(inverseHand.getName()).toEqual('Soft 4');
  });
});

describe('Hand: A 5 (Soft 5)', () => {
  const hand = new Hand(Card.ACE, Card.FIVE);
  const inverseHand = new Hand(Card.FIVE, Card.ACE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Soft 5');
    expect(inverseHand.getName()).toEqual('Soft 5');
  });
});

describe('Hand: A 6 (Soft 6)', () => {
  const hand = new Hand(Card.ACE, Card.SIX);
  const inverseHand = new Hand(Card.SIX, Card.ACE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Soft 6');
    expect(inverseHand.getName()).toEqual('Soft 6');
  });
});

describe('Hand: A 7 (Soft 7)', () => {
  const hand = new Hand(Card.ACE, Card.SEVEN);
  const inverseHand = new Hand(Card.SEVEN, Card.ACE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Soft 7');
    expect(inverseHand.getName()).toEqual('Soft 7');
  });
});

describe('Hand: A 8 (Soft 8)', () => {
  const hand = new Hand(Card.ACE, Card.EIGHT);
  const inverseHand = new Hand(Card.EIGHT, Card.ACE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Soft 8');
    expect(inverseHand.getName()).toEqual('Soft 8');
  });
});

describe('Hand: A 9 (Soft 9)', () => {
  const hand = new Hand(Card.ACE, Card.NINE);
  const inverseHand = new Hand(Card.NINE, Card.ACE);

  it('Has name', () => {
    expect(hand.getName()).toEqual('Soft 9');
    expect(inverseHand.getName()).toEqual('Soft 9');
  });
});

describe('Hand: 2 3 // 3 2 (Hard 5)', () => {
  const hand1 = new Hand(Card.TWO, Card.THREE);
  const hand2 = new Hand(Card.THREE, Card.TWO);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 5');
    expect(hand2.getName()).toEqual('Hard 5');
  });
});

describe('Hand: 2 4 // 4 2 (Hard 6)', () => {
  const hand1 = new Hand(Card.TWO, Card.FOUR);
  const hand2 = new Hand(Card.FOUR, Card.TWO);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 6');
    expect(hand2.getName()).toEqual('Hard 6');
  });
});

describe('Hand: 2 5 // 3 4 // 4 3 // 5 2 (Hard 7)', () => {
  const hand1 = new Hand(Card.TWO, Card.FIVE);
  const hand2 = new Hand(Card.THREE, Card.FOUR);
  const hand3 = new Hand(Card.FOUR, Card.THREE);
  const hand4 = new Hand(Card.FIVE, Card.TWO);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 7');
    expect(hand2.getName()).toEqual('Hard 7');
    expect(hand3.getName()).toEqual('Hard 7');
    expect(hand4.getName()).toEqual('Hard 7');
  });
});

describe('Hand: 2 6 // 3 5 // 5 3 // 6 2 (Hard 8)', () => {
  const hand1 = new Hand(Card.TWO, Card.SIX);
  const hand2 = new Hand(Card.THREE, Card.FIVE);
  const hand3 = new Hand(Card.FIVE, Card.THREE);
  const hand4 = new Hand(Card.SIX, Card.TWO);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 8');
    expect(hand2.getName()).toEqual('Hard 8');
    expect(hand3.getName()).toEqual('Hard 8');
    expect(hand4.getName()).toEqual('Hard 8');
  });
});

describe('Hand: 2 7 // 3 6 // 4 5 // 5 4 // 6 3 // 7 2 (Hard 9)', () => {
  const hand1 = new Hand(Card.TWO, Card.SEVEN);
  const hand2 = new Hand(Card.THREE, Card.SIX);
  const hand3 = new Hand(Card.FOUR, Card.FIVE);
  const hand4 = new Hand(Card.FIVE, Card.FOUR);
  const hand5 = new Hand(Card.SIX, Card.THREE);
  const hand6 = new Hand(Card.SEVEN, Card.TWO);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 9');
    expect(hand2.getName()).toEqual('Hard 9');
    expect(hand3.getName()).toEqual('Hard 9');
    expect(hand4.getName()).toEqual('Hard 9');
    expect(hand5.getName()).toEqual('Hard 9');
    expect(hand6.getName()).toEqual('Hard 9');
  });
});

describe('Hand: 2 8 // 3 7 // 4 6 // 6 4 // 7 3 // 8 2 (Hard 10)', () => {
  const hand1 = new Hand(Card.TWO, Card.EIGHT);
  const hand2 = new Hand(Card.THREE, Card.SEVEN);
  const hand3 = new Hand(Card.FOUR, Card.SIX);
  const hand4 = new Hand(Card.SIX, Card.FOUR);
  const hand5 = new Hand(Card.SEVEN, Card.THREE);
  const hand6 = new Hand(Card.EIGHT, Card.TWO);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 10');
    expect(hand2.getName()).toEqual('Hard 10');
    expect(hand3.getName()).toEqual('Hard 10');
    expect(hand4.getName()).toEqual('Hard 10');
    expect(hand5.getName()).toEqual('Hard 10');
    expect(hand6.getName()).toEqual('Hard 10');
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

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 11');
    expect(hand2.getName()).toEqual('Hard 11');
    expect(hand3.getName()).toEqual('Hard 11');
    expect(hand4.getName()).toEqual('Hard 11');
    expect(hand5.getName()).toEqual('Hard 11');
    expect(hand6.getName()).toEqual('Hard 11');
    expect(hand7.getName()).toEqual('Hard 11');
    expect(hand8.getName()).toEqual('Hard 11');
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

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 12');
    expect(hand2.getName()).toEqual('Hard 12');
    expect(hand3.getName()).toEqual('Hard 12');
    expect(hand4.getName()).toEqual('Hard 12');
    expect(hand5.getName()).toEqual('Hard 12');
    expect(hand6.getName()).toEqual('Hard 12');
    expect(hand7.getName()).toEqual('Hard 12');
    expect(hand8.getName()).toEqual('Hard 12');
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

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 13');
    expect(hand2.getName()).toEqual('Hard 13');
    expect(hand3.getName()).toEqual('Hard 13');
    expect(hand4.getName()).toEqual('Hard 13');
    expect(hand5.getName()).toEqual('Hard 13');
    expect(hand6.getName()).toEqual('Hard 13');
    expect(hand7.getName()).toEqual('Hard 13');
    expect(hand8.getName()).toEqual('Hard 13');
  });
});

describe('Hand: 4 10 // 5 9 // 6 8 // 8 6 // 9 5 // 10 4 (Hard 14)', () => {
  const hand1 = new Hand(Card.FOUR, Card.TEN);
  const hand2 = new Hand(Card.FIVE, Card.NINE);
  const hand3 = new Hand(Card.SIX, Card.EIGHT);
  const hand4 = new Hand(Card.EIGHT, Card.SIX);
  const hand5 = new Hand(Card.NINE, Card.FIVE);
  const hand6 = new Hand(Card.TEN, Card.FOUR);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 14');
    expect(hand2.getName()).toEqual('Hard 14');
    expect(hand3.getName()).toEqual('Hard 14');
    expect(hand4.getName()).toEqual('Hard 14');
    expect(hand5.getName()).toEqual('Hard 14');
    expect(hand6.getName()).toEqual('Hard 14');
  });
});

describe('Hand: 5 10 // 6 9 // 7 8 // 8 7 // 9 6 // 10 5 (Hard 15)', () => {
  const hand1 = new Hand(Card.FIVE, Card.TEN);
  const hand2 = new Hand(Card.SIX, Card.NINE);
  const hand3 = new Hand(Card.SEVEN, Card.EIGHT);
  const hand4 = new Hand(Card.EIGHT, Card.SEVEN);
  const hand5 = new Hand(Card.NINE, Card.SIX);
  const hand6 = new Hand(Card.TEN, Card.FIVE);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 15');
    expect(hand2.getName()).toEqual('Hard 15');
    expect(hand3.getName()).toEqual('Hard 15');
    expect(hand4.getName()).toEqual('Hard 15');
    expect(hand5.getName()).toEqual('Hard 15');
    expect(hand6.getName()).toEqual('Hard 15');
  });
});

describe('Hand: 6 10 // 7 9 // 9 7 // 10 6 (Hard 16)', () => {
  const hand1 = new Hand(Card.SIX, Card.TEN);
  const hand2 = new Hand(Card.SEVEN, Card.NINE);
  const hand3 = new Hand(Card.NINE, Card.SEVEN);
  const hand4 = new Hand(Card.TEN, Card.SIX);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 16');
    expect(hand2.getName()).toEqual('Hard 16');
    expect(hand3.getName()).toEqual('Hard 16');
    expect(hand4.getName()).toEqual('Hard 16');
  });
});

describe('Hand: 7 10 // 8 9 // 9 8 // 10 7 (Hard 17)', () => {
  const hand1 = new Hand(Card.SEVEN, Card.TEN);
  const hand2 = new Hand(Card.EIGHT, Card.NINE);
  const hand3 = new Hand(Card.NINE, Card.EIGHT);
  const hand4 = new Hand(Card.TEN, Card.SEVEN);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 17');
    expect(hand2.getName()).toEqual('Hard 17');
    expect(hand3.getName()).toEqual('Hard 17');
    expect(hand4.getName()).toEqual('Hard 17');
  });
});

describe('Hand: 8 10 // 10 8 (Hard 18)', () => {
  const hand1 = new Hand(Card.EIGHT, Card.TEN);
  const hand2 = new Hand(Card.TEN, Card.EIGHT);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 18');
    expect(hand2.getName()).toEqual('Hard 18');
  });
});

describe('Hand: 9 10 // 10 9 (Hard 19)', () => {
  const hand1 = new Hand(Card.NINE, Card.TEN);
  const hand2 = new Hand(Card.TEN, Card.NINE);

  it('Has name', () => {
    expect(hand1.getName()).toEqual('Hard 19');
    expect(hand2.getName()).toEqual('Hard 19');
  });
});
