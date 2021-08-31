import Card from "./Card.enum";
import Move from "./Move.enum";

class Hand {
    public card1: Card;
    public card2: Card;

    constructor(card1: Card, card2: Card) {
        this.card1 = card1;
        this.card2 = card2;
    }

    public decideMove(dealerCard: Card): Move {
        let handIndex: number = 0;
        let dealerIndex: number = 0;

        if (this.isHardHands()) {
            if (this.getValue() >= 17) handIndex = 0;
            else if (this.getValue() === 16) handIndex = 1;
            else if (this.getValue() === 15) handIndex = 2;
            else if (this.getValue() === 14) handIndex = 3;
            else if (this.getValue() === 13) handIndex = 4;
            else if (this.getValue() === 12) handIndex = 5;
            else if (this.getValue() === 11) handIndex = 6;
            else if (this.getValue() === 10) handIndex = 7;
            else if (this.getValue() === 9) handIndex = 8;
            else if (this.getValue() <= 8) handIndex = 9;
        }
        else if (this.isSoftHands()) {
            if (this.getValue() === 20) handIndex = 10;
            if (this.getValue() === 19) handIndex = 11;
            if (this.getValue() === 18) handIndex = 12;
            if (this.getValue() === 17) handIndex = 13;
            if (this.getValue() === 16) handIndex = 14;
            if (this.getValue() === 15) handIndex = 15;
            if (this.getValue() === 14) handIndex = 16;
            if (this.getValue() === 13) handIndex = 17;
        }
        else if (this.isPair()) {
            if (this.card1 === Card.ACE) handIndex = 18;
            if (this.card1 === Card.TEN) handIndex = 19;
            if (this.card1 === Card.NINE) handIndex = 20;
            if (this.card1 === Card.EIGHT) handIndex = 21;
            if (this.card1 === Card.SEVEN) handIndex = 22;
            if (this.card1 === Card.SIX) handIndex = 23;
            if (this.card1 === Card.FIVE) handIndex = 24;
            if (this.card1 === Card.FOUR) handIndex = 25;
            if (this.card1 === Card.THREE) handIndex = 26;
            if (this.card1 === Card.TWO) handIndex = 27;
        }

        if (dealerCard === Card.ACE) dealerIndex = 0;
        if (dealerCard === Card.TEN) dealerIndex = 1;
        if (dealerCard === Card.NINE) dealerIndex = 2;
        if (dealerCard === Card.EIGHT) dealerIndex = 3;
        if (dealerCard === Card.SEVEN) dealerIndex = 4;
        if (dealerCard === Card.SIX) dealerIndex = 5;
        if (dealerCard === Card.FIVE) dealerIndex = 6;
        if (dealerCard === Card.FOUR) dealerIndex = 7;
        if (dealerCard === Card.THREE) dealerIndex = 8;
        if (dealerCard === Card.TWO) dealerIndex = 9

        return this.decisionMatrix[handIndex][dealerIndex];
    }

    private getValue(): number {
        const combinedValues = this.card1 + this.card2;
        if (combinedValues > 21 && (this.card1 === Card.ACE || this.card2 === Card.ACE)) {
            return combinedValues - 10; // Treat the ace as a 1
        }
        return combinedValues;
    }

    private isBlackjack(): boolean {
        return this.getValue() === 21;
    }

    private isHardHands(): boolean {
        return !this.isPair() && !this.isSoftHands();
    }

    private isSoftHands(): boolean {
        return !this.isPair() && (this.card1 === Card.ACE || this.card2 === Card.ACE);
    }

    private isPair(): boolean {
        return this.card1 === this.card2;
    }

    private decisionMatrix: Move[][] = [
        [   Move.STAND,     Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND      ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND      ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND      ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND      ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND      ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.STAND,         Move.STAND,         Move.STAND,         Move.HIT,           Move.HIT        ],
        [   Move.HIT,       Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN ],
        [   Move.HIT,       Move.HIT,           Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.HIT        ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT        ],
        [   Move.STAND,     Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND      ],
        [   Move.STAND,     Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND      ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.STAND,         Move.STAND,         Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.STAND      ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.HIT        ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.HIT,           Move.HIT        ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.HIT,           Move.HIT        ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.HIT,           Move.HIT,           Move.HIT        ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.HIT,           Move.HIT,           Move.HIT        ],
        [   Move.SPLIT,     Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT      ],
        [   Move.STAND,     Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND,         Move.STAND      ],
        [   Move.STAND,     Move.STAND,         Move.SPLIT,         Move.SPLIT,         Move.STAND,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT      ],
        [   Move.SPLIT,     Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT      ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT      ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT      ],
        [   Move.HIT,       Move.HIT,           Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN,    Move.DOUBLEDOWN ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.HIT,           Move.SPLIT,         Move.SPLIT,         Move.HIT,           Move.HIT,           Move.HIT        ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT      ],
        [   Move.HIT,       Move.HIT,           Move.HIT,           Move.HIT,           Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT,         Move.SPLIT      ]
    ];
}

export default Hand;