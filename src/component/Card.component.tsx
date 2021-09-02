import React from 'react';
import {TouchableHighlight, Button, StyleSheet} from 'react-native';
import Card from '../lib/Card.enum';

type CardComponentProps = {
  card: Card;
  onPress: (card: Card) => void;
};

class CardComponent extends React.Component<CardComponentProps> {
  render() {
    return (
      <TouchableHighlight style={styles.touchable}>
        <Button
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
