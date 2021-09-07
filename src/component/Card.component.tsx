import React from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';
import Card from '../lib/Card.enum';

type CardComponentProps = {
  card: Card;
  isCardInHand: boolean;
  disabled?: boolean | undefined;
  onPress: (card: Card) => void;
};

class CardComponent extends React.Component<CardComponentProps> {
  buttonStyle() {
    const greyColor = '#808080';
    const lightBlueColor = '#6666D0';
    const darkBlueColor = '#0000B2';

    let backgroundColor = lightBlueColor;
    if (this.props.disabled) {
      backgroundColor = greyColor;
    } else if (this.props.isCardInHand) {
      backgroundColor = darkBlueColor;
    }

    return {
      ...styles.button,
      backgroundColor,
    };
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.highlightContainer}
        disabled={this.props.disabled}
        onPress={() => this.props.onPress(this.props.card)}>
        <View style={this.buttonStyle()}>
          <Text style={styles.buttonText}>
            {this.props.card === Card.ACE ? 'A' : this.props.card}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  highlightContainer: {
    padding: 2,
  },
  button: {
    width: 80,
    alignItems: 'center',
    backgroundColor: '#6666D0',
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default CardComponent;
