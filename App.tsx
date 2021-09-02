import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DecisionEngine from './src/lib/DecisionEngine';
import Card from './src/lib/Card.enum';
import Hand from './src/lib/Hand';
import CardComponent from './src/component/Card.component';

const App = () => {
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [dealerCard, setDealerCard] = useState<Card | undefined>();

  const addToPlayerHand = (card: Card) => {
    setPlayerCards([...playerHand.cards, card]);
  };

  const playerHand = new Hand(playerCards);
  const decisionEngine = new DecisionEngine();
  const nextMove = decisionEngine.decideMove(playerHand, dealerCard);

  return (
    <View>
      <Text style={styles.header}>{nextMove}</Text>

      <View>
        <Text style={styles.textPrompt}>You: {playerHand.getName()}</Text>
        <Text style={styles.textPrompt}>{playerHand.getValue()}</Text>
        <View style={styles.cardContainer}>
          <CardComponent card={Card.TWO} onPress={addToPlayerHand} />
          <CardComponent card={Card.THREE} onPress={addToPlayerHand} />
          <CardComponent card={Card.FOUR} onPress={addToPlayerHand} />
          <CardComponent card={Card.FIVE} onPress={addToPlayerHand} />
          <CardComponent card={Card.SIX} onPress={addToPlayerHand} />
          <CardComponent card={Card.SEVEN} onPress={addToPlayerHand} />
          <CardComponent card={Card.EIGHT} onPress={addToPlayerHand} />
          <CardComponent card={Card.NINE} onPress={addToPlayerHand} />
          <CardComponent card={Card.TEN} onPress={addToPlayerHand} />
          <CardComponent card={Card.ACE} onPress={addToPlayerHand} />
        </View>
      </View>

      <View>
        <Text style={styles.textPrompt}>Dealer: {dealerCard}</Text>
        <View style={styles.cardContainer}>
          <CardComponent card={Card.TWO} onPress={setDealerCard} />
          <CardComponent card={Card.THREE} onPress={setDealerCard} />
          <CardComponent card={Card.FOUR} onPress={setDealerCard} />
          <CardComponent card={Card.FIVE} onPress={setDealerCard} />
          <CardComponent card={Card.SIX} onPress={setDealerCard} />
          <CardComponent card={Card.SEVEN} onPress={setDealerCard} />
          <CardComponent card={Card.EIGHT} onPress={setDealerCard} />
          <CardComponent card={Card.NINE} onPress={setDealerCard} />
          <CardComponent card={Card.TEN} onPress={setDealerCard} />
          <CardComponent card={Card.ACE} onPress={setDealerCard} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 32,
    marginVertical: 8,
  },
  textPrompt: {
    textAlign: 'center',
  },
  cardContainer: {
    paddingTop: 6,
    paddingBottom: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default App;
