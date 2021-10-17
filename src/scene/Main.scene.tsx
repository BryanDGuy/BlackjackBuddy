import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import DecisionEngine from '../lib/DecisionEngine';
import Card from '../lib/Card.enum';
import Hand from '../lib/Hand';
import CardComponent from '../component/Card.component';
import Move from '../lib/Move.enum';

const MainScene = () => {
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [dealerCard, setDealerCard] = useState<Card | undefined>();
  const allCards = [
    Card.TWO,
    Card.THREE,
    Card.FOUR,
    Card.FIVE,
    Card.SIX,
    Card.SEVEN,
    Card.EIGHT,
    Card.NINE,
    Card.TEN,
    Card.ACE,
  ];

  const getPlayerHandCounts = () => {
    const playerHandCounts = new Map();
    for (const card of playerHand.cards) {
      const count = playerHandCounts.get(card) + 1 || 1;
      playerHandCounts.set(card, count);
    }
    return Array.from(playerHandCounts);
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

    let textColor: string;
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

  const decisionEngine = new DecisionEngine();
  const playerHand = new Hand(playerCards);
  const nextMove = decisionEngine.decideMove(playerHand, dealerCard);
  const isSelectionDisabled =
    nextMove === Move.STAND ||
    nextMove === Move.DOUBLEDOWN ||
    (nextMove === Move.SELECTDEALERCARD && playerHand.getSize() >= 2);

  const renderPlayerSelection = (cardListItem: {item: Card}) => (
    <CardComponent
      card={cardListItem.item}
      isCardInHand={
        !!playerHand.cards.find(playerCard => playerCard === cardListItem.item)
      }
      disabled={isSelectionDisabled}
      onPress={card => setPlayerCards([...playerHand.cards, card])}
    />
  );

  const renderDealerSelection = (cardListItem: {item: Card}) => (
    <CardComponent
      card={cardListItem.item}
      isCardInHand={cardListItem.item === dealerCard}
      onPress={setDealerCard}
    />
  );

  const renderPlayerCards = (cardListItem: {item: any}) => {
    const cardAsString =
      cardListItem.item[0] === Card.ACE ? 'A' : cardListItem.item[0];
    return (
      <Text>
        {cardAsString} x{cardListItem.item[1]}
      </Text>
    );
  };

  return (
    <View>
      <Text style={headerStyle(nextMove)}>{nextMove}</Text>

      <Text style={styles.textPrompt}>{playerHand.getName()}</Text>
      <Text style={styles.textPrompt}>
        {playerHand.getSize() > 0 ? playerHand.getValue() : 'Your Hand'}
      </Text>
      <FlatList
        contentContainerStyle={styles.cardContainer}
        data={allCards}
        numColumns={4}
        renderItem={renderPlayerSelection}
      />

      <Text style={styles.textPrompt}>Dealer</Text>
      <FlatList
        contentContainerStyle={styles.cardContainer}
        data={allCards}
        numColumns={4}
        renderItem={renderDealerSelection}
      />

      <TouchableHighlight style={styles.resetButton} onPress={reset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableHighlight>

      <FlatList
        contentContainerStyle={styles.handContainer}
        data={getPlayerHandCounts()}
        numColumns={1}
        renderItem={renderPlayerCards}
      />
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
    paddingBottom: 20,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#0000B2',
    padding: 6,
    alignItems: 'center',
  },
  resetText: {
    color: '#FFFFFF',
  },
  handContainer: {
    paddingTop: 6,
    alignItems: 'center',
  },
});

export default MainScene;
