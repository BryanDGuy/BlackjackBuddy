import React, {useState} from 'react';
import {View, Text, Button, TouchableHighlight, StyleSheet} from 'react-native';
import DecisionEngine from './src/lib/DecisionEngine';
import Card from './src/lib/Card.enum';
import Hand from './src/lib/Hand';
import Move from './src/lib/Move.enum';

const App = () => {
  const [pickingFirstCard, setPickingFirstCard] = useState(true);
  const [firstCard, setFirstCard] = useState(Card.TWO);
  const [secondCard, setSecondCard] = useState(Card.TWO);
  const [dealerCard, setDealerCard] = useState(Card.TWO);

  const isCardInHand = (card: Card) => {
    return firstCard === card || secondCard === card;
  };

  const isDealerCard = (card: Card) => {
    return dealerCard === card;
  };

  const setHandCard = (card: Card) => {
    if (pickingFirstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
    }

    setPickingFirstCard(!pickingFirstCard);
  };

  const decisionEngine = new DecisionEngine();
  const hand = new Hand(firstCard, secondCard);
  const nextMove = decisionEngine.decideMove(hand, dealerCard);

  return (
    <View>
      <View style={styles.header}>
        <Text>
          You: {hand.getValue()} ({hand.getName()})
        </Text>
        <Text>Dealer: {dealerCard}</Text>
        <Text>Your next move should be {Move[nextMove]}</Text>
      </View>

      <View>
        <Text style={styles.textPrompt}>
          Pick your {pickingFirstCard ? 'first' : 'second'} card
        </Text>
        <View style={styles.cardContainer}>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isCardInHand(Card.TWO) ? '#F194FF' : '#2196F3'}
              onPress={() => setHandCard(Card.TWO)}
              title="2">
              2
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isCardInHand(Card.THREE) ? '#F194FF' : '#2196F3'}
              onPress={() => setHandCard(Card.THREE)}
              title="3">
              3
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isCardInHand(Card.FOUR) ? '#F194FF' : '#2196F3'}
              onPress={() => setHandCard(Card.FOUR)}
              title="4">
              4
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isCardInHand(Card.FIVE) ? '#F194FF' : '#2196F3'}
              onPress={() => setHandCard(Card.FIVE)}
              title="5">
              5
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isCardInHand(Card.SIX) ? '#F194FF' : '#2196F3'}
              onPress={() => setHandCard(Card.SIX)}
              title="6">
              6
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isCardInHand(Card.SEVEN) ? '#F194FF' : '#2196F3'}
              onPress={() => setHandCard(Card.SEVEN)}
              title="7">
              7
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isCardInHand(Card.EIGHT) ? '#F194FF' : '#2196F3'}
              onPress={() => setHandCard(Card.EIGHT)}
              title="8">
              8
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isCardInHand(Card.NINE) ? '#F194FF' : '#2196F3'}
              onPress={() => setHandCard(Card.NINE)}
              title="9">
              9
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isCardInHand(Card.TEN) ? '#F194FF' : '#2196F3'}
              onPress={() => setHandCard(Card.TEN)}
              title="10">
              10
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isCardInHand(Card.ACE) ? '#F194FF' : '#2196F3'}
              onPress={() => setHandCard(Card.ACE)}
              title="A">
              A
            </Button>
          </TouchableHighlight>
        </View>
      </View>

      <View>
        <Text style={styles.textPrompt}>Pick the dealer's card</Text>
        <View style={styles.cardContainer}>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isDealerCard(Card.TWO) ? '#F194FF' : '#2196F3'}
              onPress={() => setDealerCard(Card.TWO)}
              title="2">
              2
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isDealerCard(Card.THREE) ? '#F194FF' : '#2196F3'}
              onPress={() => setDealerCard(Card.THREE)}
              title="3">
              3
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isDealerCard(Card.FOUR) ? '#F194FF' : '#2196F3'}
              onPress={() => setDealerCard(Card.FOUR)}
              title="4">
              4
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isDealerCard(Card.FIVE) ? '#F194FF' : '#2196F3'}
              onPress={() => setDealerCard(Card.FIVE)}
              title="5">
              5
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isDealerCard(Card.SIX) ? '#F194FF' : '#2196F3'}
              onPress={() => setDealerCard(Card.SIX)}
              title="6">
              6
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isDealerCard(Card.SEVEN) ? '#F194FF' : '#2196F3'}
              onPress={() => setDealerCard(Card.SEVEN)}
              title="7">
              7
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isDealerCard(Card.EIGHT) ? '#F194FF' : '#2196F3'}
              onPress={() => setDealerCard(Card.EIGHT)}
              title="8">
              8
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isDealerCard(Card.NINE) ? '#F194FF' : '#2196F3'}
              onPress={() => setDealerCard(Card.NINE)}
              title="9">
              9
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isDealerCard(Card.TEN) ? '#F194FF' : '#2196F3'}
              onPress={() => setDealerCard(Card.TEN)}
              title="10">
              10
            </Button>
          </TouchableHighlight>
          <TouchableHighlight style={styles.touchable}>
            <Button
              color={isDealerCard(Card.ACE) ? '#F194FF' : '#2196F3'}
              onPress={() => setDealerCard(Card.ACE)}
              title="A">
              A
            </Button>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginVertical: 8,
  },
  textPrompt: {
    textAlign: 'center',
  },
  cardContainer: {
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  touchable: {
    width: 80,
    padding: 1,
  },
});

export default App;
