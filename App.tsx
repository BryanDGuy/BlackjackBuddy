import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DecisionEngine from './src/lib/DecisionEngine';
import Card from './src/lib/Card.enum';
import Hand from './src/lib/Hand';
import Move from './src/lib/Move.enum';
import CardComponent from './src/component/Card.component';

const App = () => {
  const [playerHand, setPlayerHand] = useState<Hand>(new Hand([]));
  const [dealerHand, setDealerHand] = useState<Hand>(new Hand([]));

  const setCardToPlayerHand = (card: Card) => {
    const newCardSet = [...playerHand.cards, card];
    setPlayerHand(new Hand(newCardSet));
  };

  const setCardToDealerHand = (card: Card) => {
    setDealerHand(new Hand([card]));
  };

  const decisionEngine = new DecisionEngine();
  const nextMove = decisionEngine.decideMove(playerHand, dealerHand.cards[0]);

  return (
    <View>
      <View style={styles.header}>
        <Text>
          You: {playerHand.getValue()} ({playerHand.getName()})
        </Text>
        <Text>Dealer: {dealerHand.cards[0]}</Text>
        <Text>Your next move should be {Move[nextMove]}</Text>
      </View>

      <View>
        <Text style={styles.textPrompt}>Pick your cards</Text>
        <View style={styles.cardContainer}>
          <CardComponent
            card={Card.TWO}
            hand={playerHand}
            setToHandCallback={setCardToPlayerHand}
          />
          <CardComponent
            card={Card.THREE}
            hand={playerHand}
            setToHandCallback={setCardToPlayerHand}
          />
          <CardComponent
            card={Card.FOUR}
            hand={playerHand}
            setToHandCallback={setCardToPlayerHand}
          />
          <CardComponent
            card={Card.FIVE}
            hand={playerHand}
            setToHandCallback={setCardToPlayerHand}
          />
          <CardComponent
            card={Card.SIX}
            hand={playerHand}
            setToHandCallback={setCardToPlayerHand}
          />
          <CardComponent
            card={Card.SEVEN}
            hand={playerHand}
            setToHandCallback={setCardToPlayerHand}
          />
          <CardComponent
            card={Card.EIGHT}
            hand={playerHand}
            setToHandCallback={setCardToPlayerHand}
          />
          <CardComponent
            card={Card.NINE}
            hand={playerHand}
            setToHandCallback={setCardToPlayerHand}
          />
          <CardComponent
            card={Card.TEN}
            hand={playerHand}
            setToHandCallback={setCardToPlayerHand}
          />
          <CardComponent
            card={Card.ACE}
            hand={playerHand}
            setToHandCallback={setCardToPlayerHand}
          />
        </View>
      </View>

      <View>
        <Text style={styles.textPrompt}>Pick the dealer's card</Text>
        <View style={styles.cardContainer}>
          <CardComponent
            card={Card.TWO}
            hand={dealerHand}
            setToHandCallback={setCardToDealerHand}
          />
          <CardComponent
            card={Card.THREE}
            hand={dealerHand}
            setToHandCallback={setCardToDealerHand}
          />
          <CardComponent
            card={Card.FOUR}
            hand={dealerHand}
            setToHandCallback={setCardToDealerHand}
          />
          <CardComponent
            card={Card.FIVE}
            hand={dealerHand}
            setToHandCallback={setCardToDealerHand}
          />
          <CardComponent
            card={Card.SIX}
            hand={dealerHand}
            setToHandCallback={setCardToDealerHand}
          />
          <CardComponent
            card={Card.SEVEN}
            hand={dealerHand}
            setToHandCallback={setCardToDealerHand}
          />
          <CardComponent
            card={Card.EIGHT}
            hand={dealerHand}
            setToHandCallback={setCardToDealerHand}
          />
          <CardComponent
            card={Card.NINE}
            hand={dealerHand}
            setToHandCallback={setCardToDealerHand}
          />
          <CardComponent
            card={Card.TEN}
            hand={dealerHand}
            setToHandCallback={setCardToDealerHand}
          />
          <CardComponent
            card={Card.ACE}
            hand={dealerHand}
            setToHandCallback={setCardToDealerHand}
          />
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
});

export default App;
