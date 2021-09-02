import React from 'react';
import {TouchableHighlight, Button, StyleSheet} from 'react-native';
import Card from '../lib/Card.enum';
import Hand from '../lib/Hand';

type CardComponentProps = {
  card: Card;
  setToHandCallback: (card: Card) => void;
  hand: Hand;
};

class CardComponent extends React.Component<CardComponentProps> {
  isCardInHand() {
    return (
      this.props.hand.cards.findIndex(
        cardInHand => cardInHand === this.props.card,
      ) > -1
    );
  }

  isSelectionDisabled() {
    return this.props.hand.getValue() >= 21;
  }

  render() {
    return (
      <TouchableHighlight style={styles.touchable}>
        <Button
          color={this.isCardInHand() ? '#F194FF' : '#2196F3'}
          onPress={() => this.props.setToHandCallback(this.props.card)}
          disabled={this.isSelectionDisabled()}
          title={String(this.props.card === Card.ACE ? 'A' : this.props.card)}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    width: 80,
    padding: 1,
  },
});

export default CardComponent;
