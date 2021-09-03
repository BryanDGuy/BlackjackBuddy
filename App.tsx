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

  const headerStyle = (nextMove: Move) => {
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

    return {
      ...styles.header,
      color: textColor,
    };
  };

  const playerHand = new Hand(playerCards);
  const decisionEngine = new DecisionEngine();
  const nextMove = decisionEngine.decideMove(playerHand, dealerCard);

  return (
    <View>
      <Text style={headerStyle(nextMove)}>{nextMove}</Text>

      <View>
        <Text style={styles.textPrompt}>{playerHand.getName()}</Text>
        <Text style={styles.textPrompt}>{playerHand.getValue()}</Text>
        <View style={styles.cardContainer}>
          <CardComponent
            card={Card.TWO}
            numberThisCardInHand={numberInPlayerHand}
            disabled={playerHand.getValue() >= 21}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.THREE}
            numberThisCardInHand={numberInPlayerHand}
            disabled={playerHand.getValue() >= 21}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.FOUR}
            numberThisCardInHand={numberInPlayerHand}
            disabled={playerHand.getValue() >= 21}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.FIVE}
            numberThisCardInHand={numberInPlayerHand}
            disabled={playerHand.getValue() >= 21}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.SIX}
            numberThisCardInHand={numberInPlayerHand}
            disabled={playerHand.getValue() >= 21}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.SEVEN}
            numberThisCardInHand={numberInPlayerHand}
            disabled={playerHand.getValue() >= 21}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.EIGHT}
            numberThisCardInHand={numberInPlayerHand}
            disabled={playerHand.getValue() >= 21}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.NINE}
            numberThisCardInHand={numberInPlayerHand}
            disabled={playerHand.getValue() >= 21}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.TEN}
            numberThisCardInHand={numberInPlayerHand}
            disabled={playerHand.getValue() >= 21}
            onPress={addToPlayerHand}
          />
          <CardComponent
            card={Card.ACE}
            numberThisCardInHand={numberInPlayerHand}
            disabled={playerHand.getValue() >= 21}
            onPress={addToPlayerHand}
          />
        </View>
      </View>

      <View>
        <Text style={styles.textPrompt}>Dealer</Text>
        <View style={styles.cardContainer}>
          <CardComponent
            card={Card.TWO}
            numberThisCardInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.THREE}
            numberThisCardInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.FOUR}
            numberThisCardInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.FIVE}
            numberThisCardInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.SIX}
            numberThisCardInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.SEVEN}
            numberThisCardInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.EIGHT}
            numberThisCardInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.NINE}
            numberThisCardInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.TEN}
            numberThisCardInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
          <CardComponent
            card={Card.ACE}
            numberThisCardInHand={numberInDealerHand}
            onPress={setDealerCard}
          />
        </View>
      </View>

      <Button color="#0000B2" title="Reset" onPress={reset} />

      {playerHand.cards.forEach(card => {
        <CardComponent
          card={card}
          numberThisCardInHand={numberInPlayerHand}
          onPress={() => {}}
        />;
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
