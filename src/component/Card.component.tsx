import React from 'react';
import {TouchableHighlight, Button, StyleSheet} from 'react-native';
import Card from '../lib/Card.enum';

type CardComponentProps = {
  card: Card;
  numberThisCardInHand: number;
  disabled?: boolean | undefined;
  onPress: (card: Card) => void;
};

class CardComponent extends React.Component<CardComponentProps> {
  render() {
    return (
      <TouchableHighlight style={styles.touchable}>
        <Button
          color={this.props.numberThisCardInHand > 0 ? '#0000B2' : '#6666D0'}
          disabled={this.props.disabled}
          onPress={() => this.props.onPress(this.props.card)}
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
