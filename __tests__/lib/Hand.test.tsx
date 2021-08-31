/**
 * @format
 */
import 'react-native';
import Card from '../../lib/Card.enum';
import Move from '../../lib/Move.enum'
import Hand from '../../lib/Hand';

describe('Hand: 2 2', () => {
    const hand = new Hand(Card.TWO, Card.TWO);

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.ACE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
});

describe('Hand: 3 3', () => {
    const hand = new Hand(Card.THREE, Card.THREE);

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.ACE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
});

describe('Hand: 4 4', () => {
    const hand = new Hand(Card.FOUR, Card.FOUR);

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.ACE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
});

describe('Hand: 5 5', () => {
    const hand = new Hand(Card.FIVE, Card.FIVE);

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.ACE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
});

describe('Hand: 6 6', () => {
    const hand = new Hand(Card.SIX, Card.SIX);

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.ACE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
});

describe('Hand: 7 7', () => {
    const hand = new Hand(Card.SEVEN, Card.SEVEN);

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.ACE)
    
        expect(nextMove).toEqual(Move.HIT)
    });
});

describe('Hand: 8 8', () => {
    const hand = new Hand(Card.EIGHT, Card.EIGHT);

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.ACE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
});

describe('Hand: 9 9', () => {
    const hand = new Hand(Card.NINE, Card.NINE);

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.ACE)
    
        expect(nextMove).toEqual(Move.STAND)
    });
});

describe('Hand: 10 10', () => {
    const hand = new Hand(Card.TEN, Card.TEN);

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.STAND)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.ACE)
    
        expect(nextMove).toEqual(Move.STAND)
    });
});

describe('Hand: A A', () => {
    const hand = new Hand(Card.ACE, Card.ACE);

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.ACE)
    
        expect(nextMove).toEqual(Move.SPLIT)
    });
});

describe('Hand: A 2', () => {
    const hand = new Hand(Card.ACE, Card.TWO);
    const inverseHand = new Hand(Card.TWO, Card.ACE)

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
        const nextMoveInverse = inverseHand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
        const nextMoveInverse = inverseHand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
        const nextMoveInverse = inverseHand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
        const nextMoveInverse = inverseHand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
        const nextMoveInverse = inverseHand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
        const nextMoveInverse = inverseHand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
        const nextMoveInverse = inverseHand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
        const nextMoveInverse = inverseHand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
});

describe('Hand: A 3', () => {
    const hand = new Hand(Card.ACE, Card.THREE);
    const inverseHand = new Hand(Card.THREE, Card.ACE)

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
        const nextMoveInverse = inverseHand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
        const nextMoveInverse = inverseHand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
        const nextMoveInverse = inverseHand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
        const nextMoveInverse = inverseHand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
        const nextMoveInverse = inverseHand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
        const nextMoveInverse = inverseHand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
        const nextMoveInverse = inverseHand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
        const nextMoveInverse = inverseHand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
});

describe('Hand: A 4', () => {
    const hand = new Hand(Card.ACE, Card.FOUR);
    const inverseHand = new Hand(Card.FOUR, Card.ACE)

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
        const nextMoveInverse = inverseHand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
        const nextMoveInverse = inverseHand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
        const nextMoveInverse = inverseHand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
        const nextMoveInverse = inverseHand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
        const nextMoveInverse = inverseHand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
        const nextMoveInverse = inverseHand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
        const nextMoveInverse = inverseHand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
        const nextMoveInverse = inverseHand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
});

describe('Hand: A 5', () => {
    const hand = new Hand(Card.ACE, Card.FOUR);
    const inverseHand = new Hand(Card.FOUR, Card.ACE)

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
        const nextMoveInverse = inverseHand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
        const nextMoveInverse = inverseHand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
        const nextMoveInverse = inverseHand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
        const nextMoveInverse = inverseHand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
        const nextMoveInverse = inverseHand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
        const nextMoveInverse = inverseHand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
        const nextMoveInverse = inverseHand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
        const nextMoveInverse = inverseHand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
});

describe('Hand: A 6', () => {
    const hand = new Hand(Card.ACE, Card.SIX);
    const inverseHand = new Hand(Card.SIX, Card.ACE)

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
        const nextMoveInverse = inverseHand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
        const nextMoveInverse = inverseHand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
        const nextMoveInverse = inverseHand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
        const nextMoveInverse = inverseHand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
        const nextMoveInverse = inverseHand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
        const nextMoveInverse = inverseHand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
        const nextMoveInverse = inverseHand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
        const nextMoveInverse = inverseHand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
});

describe('Hand: A 7', () => {
    const hand = new Hand(Card.ACE, Card.SEVEN);
    const inverseHand = new Hand(Card.SEVEN, Card.ACE)

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
        const nextMoveInverse = inverseHand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
        const nextMoveInverse = inverseHand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
        const nextMoveInverse = inverseHand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
        const nextMoveInverse = inverseHand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
        const nextMoveInverse = inverseHand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.DOUBLEDOWN)
        expect(nextMoveInverse).toEqual(Move.DOUBLEDOWN)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
        const nextMoveInverse = inverseHand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
        const nextMoveInverse = inverseHand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
        const nextMoveInverse = inverseHand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.HIT)
        expect(nextMoveInverse).toEqual(Move.HIT)
    });
});

describe('Hand: A 8', () => {
    const hand = new Hand(Card.ACE, Card.EIGHT);
    const inverseHand = new Hand(Card.EIGHT, Card.ACE)

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
        const nextMoveInverse = inverseHand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
        const nextMoveInverse = inverseHand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
        const nextMoveInverse = inverseHand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
        const nextMoveInverse = inverseHand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
        const nextMoveInverse = inverseHand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
        const nextMoveInverse = inverseHand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
        const nextMoveInverse = inverseHand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
        const nextMoveInverse = inverseHand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
});

describe('Hand: A 8', () => {
    const hand = new Hand(Card.ACE, Card.NINE);
    const inverseHand = new Hand(Card.NINE, Card.ACE)

    it('Dealer: 2', () => {
        const nextMove = hand.decideMove(Card.TWO)
        const nextMoveInverse = inverseHand.decideMove(Card.TWO)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 3', () => {
        const nextMove = hand.decideMove(Card.THREE)
        const nextMoveInverse = inverseHand.decideMove(Card.THREE)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 4', () => {
        const nextMove = hand.decideMove(Card.FOUR)
        const nextMoveInverse = inverseHand.decideMove(Card.FOUR)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 5', () => {
        const nextMove = hand.decideMove(Card.FIVE)
        const nextMoveInverse = inverseHand.decideMove(Card.FIVE)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 6', () => {
        const nextMove = hand.decideMove(Card.SIX)
        const nextMoveInverse = inverseHand.decideMove(Card.SIX)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 7', () => {
        const nextMove = hand.decideMove(Card.SEVEN)
        const nextMoveInverse = inverseHand.decideMove(Card.SEVEN)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 8', () => {
        const nextMove = hand.decideMove(Card.EIGHT)
        const nextMoveInverse = inverseHand.decideMove(Card.EIGHT)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 9', () => {
        const nextMove = hand.decideMove(Card.NINE)
        const nextMoveInverse = inverseHand.decideMove(Card.NINE)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: 10', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
    
    it('Dealer: A', () => {
        const nextMove = hand.decideMove(Card.TEN)
        const nextMoveInverse = inverseHand.decideMove(Card.TEN)
    
        expect(nextMove).toEqual(Move.STAND)
        expect(nextMoveInverse).toEqual(Move.STAND)
    });
});