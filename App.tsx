/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, Text} from 'react-native';
import DecisionEngine from './lib/DecisionEngine';
import Card from './lib/Card.enum';
import Hand from './lib/Hand';
import Move from './lib/Move.enum';

const App = () => {
  const decisionEngine = new DecisionEngine();
  const card1 = Card.ACE;
  const card2 = Card.FIVE;
  const dealerCard = Card.ACE;

  const hand = new Hand(card1, card2);
  const nextMove = decisionEngine.decideMove(hand, dealerCard);

  return (
    <View>
      <Text>
        You: {hand.getValue()} ({hand.getName()})
      </Text>
      <Text>Dealer: {dealerCard}</Text>
      <Text>Your next move should be {Move[nextMove]}</Text>
    </View>
  );
};

export default App;
