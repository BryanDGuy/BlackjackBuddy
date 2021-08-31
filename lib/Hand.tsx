import Card from "./Card";
import Move from "./Move";

class Hand {
    public card1: Card;
    public card2: Card;

    constructor(card1: Card, card2: Card) {
        this.card1 = card1;
        this.card2 = card2;
    }

    public decideMove(dealerCard: Card): Move {
        switch(dealerCard) {
            case Card.TWO: {

            }
        }

        return Move.STAND
    }

    private getValue() {

    }

    private isPair() {
        return this.card1 === this.card2;
    }

    private isSoftHands() {
        return !this.isPair() && (this.card1 === Card.ACE || this.card2 === Card.ACE);
    }

    private isHardHands() {
        return !this.isPair() && !this.isSoftHands();
    }

    private static decisionMatrix: Array<Array<Move>> = [
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