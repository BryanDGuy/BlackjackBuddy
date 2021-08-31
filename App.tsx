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
import {Text, View} from 'react-native';
import Card from './lib/Card.enum';
import Move from './lib/Move.enum';
import Hand from './lib/Hand';

const App = () => {
  const hand = new Hand(Card.ACE, Card.FIVE);
  const dealerCard = Card.SEVEN;

  const nextMove = hand.decideMove(dealerCard);

  return (
    <View>
      <Text>Your hand is {hand.getName()}</Text>
      <Text>The dealer has a(n) {Card[dealerCard]}</Text>
      <Text>Your next move should be {Move[nextMove]}</Text>
    </View>
  );
};

export default App;
