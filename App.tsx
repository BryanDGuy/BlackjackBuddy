/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import DecisionEngine from './src/lib/DecisionEngine';
import Card from './src/lib/Card.enum';
import Hand from './src/lib/Hand';
import Move from './src/lib/Move.enum';

const App = () => {
  const [pickingFirstCard, setPickingFirstCard] = useState(true);
  const [firstCard, setFirstCard] = useState(Card.ACE);
  const [secondCard, setSecondCard] = useState(Card.FIVE);
  const [dealerCard, setDealerCard] = useState(Card.ACE);

  const decisionEngine = new DecisionEngine();

  const hand = new Hand(firstCard, secondCard);
  const nextMove = decisionEngine.decideMove(hand, dealerCard);

  const isCardInHand = (card: Card) => {
    return firstCard === card || secondCard === card;
  };

  const isCardInDealerHand = (card: Card) => {
    return dealerCard === card;
  };

  const setHandCard = (card: Card) => {
    console.log(card);
    if (pickingFirstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
    }

    setPickingFirstCard(!pickingFirstCard);
  };

  return (
    <View>
      <Text>
        You: {hand.getValue()} ({hand.getName()})
      </Text>
      <Text>Dealer: {dealerCard}</Text>
      <Text>Your next move should be {Move[nextMove]}</Text>
      <Text>Pick your {pickingFirstCard ? 'first' : 'second'} card</Text>
      <Button
        color={isCardInHand(Card.TWO) ? '#F194FF' : '#2196F3'}
        onPress={() => setHandCard(Card.TWO)}
        title="2">
        2
      </Button>
      <Button
        color={isCardInHand(Card.THREE) ? '#F194FF' : '#2196F3'}
        onPress={() => setHandCard(Card.THREE)}
        title="3">
        3
      </Button>
      <Button
        color={isCardInHand(Card.FOUR) ? '#F194FF' : '#2196F3'}
        onPress={() => setHandCard(Card.FOUR)}
        title="4">
        4
      </Button>
      <Button
        color={isCardInHand(Card.FIVE) ? '#F194FF' : '#2196F3'}
        onPress={() => setHandCard(Card.FIVE)}
        title="5">
        5
      </Button>
      <Button
        color={isCardInHand(Card.SIX) ? '#F194FF' : '#2196F3'}
        onPress={() => setHandCard(Card.SIX)}
        title="6">
        6
      </Button>
      <Button
        color={isCardInHand(Card.SEVEN) ? '#F194FF' : '#2196F3'}
        onPress={() => setHandCard(Card.SEVEN)}
        title="7">
        7
      </Button>
      <Button
        color={isCardInHand(Card.EIGHT) ? '#F194FF' : '#2196F3'}
        onPress={() => setHandCard(Card.EIGHT)}
        title="8">
        8
      </Button>
      <Button
        color={isCardInHand(Card.NINE) ? '#F194FF' : '#2196F3'}
        onPress={() => setHandCard(Card.NINE)}
        title="9">
        9
      </Button>
      <Button
        color={isCardInHand(Card.TEN) ? '#F194FF' : '#2196F3'}
        onPress={() => setHandCard(Card.TEN)}
        title="10">
        10
      </Button>
      <Button
        color={isCardInHand(Card.ACE) ? '#F194FF' : '#2196F3'}
        onPress={() => setHandCard(Card.ACE)}
        title="A">
        A
      </Button>
      <Text>Pick the dealer's card</Text>
      <Button
        color={isCardInDealerHand(Card.TWO) ? '#F194FF' : '#2196F3'}
        onPress={() => setDealerCard(Card.TWO)}
        title="2">
        2
      </Button>
      <Button
        color={isCardInDealerHand(Card.THREE) ? '#F194FF' : '#2196F3'}
        onPress={() => setDealerCard(Card.THREE)}
        title="3">
        3
      </Button>
      <Button
        color={isCardInDealerHand(Card.FOUR) ? '#F194FF' : '#2196F3'}
        onPress={() => setDealerCard(Card.FOUR)}
        title="4">
        4
      </Button>
      <Button
        color={isCardInDealerHand(Card.FIVE) ? '#F194FF' : '#2196F3'}
        onPress={() => setDealerCard(Card.FIVE)}
        title="5">
        5
      </Button>
      <Button
        color={isCardInDealerHand(Card.SIX) ? '#F194FF' : '#2196F3'}
        onPress={() => setDealerCard(Card.SIX)}
        title="6">
        6
      </Button>
      <Button
        color={isCardInDealerHand(Card.SEVEN) ? '#F194FF' : '#2196F3'}
        onPress={() => setDealerCard(Card.SEVEN)}
        title="7">
        7
      </Button>
      <Button
        color={isCardInDealerHand(Card.EIGHT) ? '#F194FF' : '#2196F3'}
        onPress={() => setDealerCard(Card.EIGHT)}
        title="8">
        8
      </Button>
      <Button
        color={isCardInDealerHand(Card.NINE) ? '#F194FF' : '#2196F3'}
        onPress={() => setDealerCard(Card.NINE)}
        title="9">
        9
      </Button>
      <Button
        color={isCardInDealerHand(Card.TEN) ? '#F194FF' : '#2196F3'}
        onPress={() => setDealerCard(Card.TEN)}
        title="10">
        10
      </Button>
      <Button
        color={isCardInDealerHand(Card.ACE) ? '#F194FF' : '#2196F3'}
        onPress={() => setDealerCard(Card.ACE)}
        title="A">
        A
      </Button>
    </View>
  );
};

export default App;
