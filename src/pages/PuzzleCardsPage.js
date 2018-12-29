import React, { Component } from "react";
import { Card, Button } from "antd";

class PuzzleCardsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          id: 1,
          setup: "did you hear about the two silk worms in a race?",
          punchline: "It ended in a tie"
        },
        {
          id: 2,
          setup: "what happens to a frog's car when it breaks down? ",
          punchline: "It gets toad away"
        }
      ]
    };
  }

  addNewCard = () => {
    console.info("hello");
  };

  render() {
    return (
      <div>
        {this.state.cardList.map(card => {
          return (
            <Card key={card.id}>
              <div>Q:{card.setup}</div>
              <div>
                <strong>A:{card.punchline}</strong>
              </div>
            </Card>
          );
        })}
        <div>
          <Button onClick={this.addNewCard}>添加卡片</Button>
        </div>
      </div>
    );
  }
}

export default PuzzleCardsPage;
