import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import DecisionEngine from './src/lib/DecisionEngine';
import Card from './src/lib/Card.enum';
import Hand from './src/lib/Hand';
import CardComponent from './src/component/Card.component';
import Move from './src/lib/Move.enum';

const App = () => {
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [dealerCard, setDealerCard] = useState<Card | undefined>();

  const addToPlayerHand = (card: Card) => {
    setPlayerCards([...playerHand.cards, card]);
  };

  const numberInPlayerHand = (card: Card) => {
    return playerCards.filter(playerCard => playerCard === card).length;
  };

  const numberInDealerHand = (card: Card) => {
    return card === dealerCard ? 1 : 0;
  };

  const reset = () => {
    setPlayerCards([]);
    setDealerCard(undefined);
  };

  const playerHand = new Hand(playerCards);
  const decisionEngine = new DecisionEngine();
  const nextMove = decisionEngine.decideMove(playerHand, dealerCard);

  const greenColor = '#008000';
  const redColor = '#FF0000';
  const orangeColor = '#FFA500';
  const blueColor = '#0000FF';
  const blackColor = '#000000';

  let textColor = greenColor;
  switch (nextMove) {
    case Move.HIT: {
      textColor = greenColor;
      break;
    }
    case Move.STAND: {
      textColor = redColor;
      break;
    }
    case Move.DOUBLEDOWN: {
      textColor = orangeColor;
      break;
    }
    case Move.SPLIT: {
      textColor = blueColor;
      break;
    }
    default: {
      textColor = blackColor;
      break;
    }
  }

  const programaticStyles = {
    ...styles.header,
    color: textColor,
  };

  return (
    <View>
      <Text style={programaticStyles}>{nextMove}</Text>

      <View>
        <Text style={styles.textPrompt}>You: {playerHand.getName()}</Text>
        <Text style={styles.textPrompt}>{playerHand.getValue()}</Text>
        <View style={styles.cardContainer}>
          <CardComponent
            card={Card.TWO}
            numberInHand={numberInPlayerHand}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.THREE}
            numberInHand={numberInPlayerHand}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.FOUR}
            numberInHand={numberInPlayerHand}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.FIVE}
            numberInHand={numberInPlayerHand}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.SIX}
            numberInHand={numberInPlayerHand}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.SEVEN}
            numberInHand={numberInPlayerHand}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.EIGHT}
            numberInHand={numberInPlayerHand}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.NINE}
            numberInHand={numberInPlayerHand}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.TEN}
            numberInHand={numberInPlayerHand}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.ACE}
            numberInHand={numberInPlayerHand}
            onPress={addToPlayerHand}
          />
        </View>
      </View>

      <View>
        <Text style={styles.textPrompt}>Dealer: {dealerCard}</Text>
        <View style={styles.cardContainer}>
          <CardComponent
            card={Card.TWO}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.THREE}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.FOUR}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.FIVE}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.SIX}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.SEVEN}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.EIGHT}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.NINE}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.TEN}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.ACE}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
        </View>
      </View>

      <Button color="#0000B2" title="Reset" onPress={reset} />

      {playerHand.cards.forEach(card => {
        return (
          <CardComponent
            card={card}
            numberInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
        );
      })}
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
