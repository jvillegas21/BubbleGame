import React, { Component } from "react";
import Bubble from "../bubble";
import Score from "../score";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      dropRate: 0
    };

    this.gameLoop = this.gameLoop.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.gameLoop);
  }

  gameLoop() {
    const dropRate = this.state.dropRate * 3;
    const bubbleSize = Math.floor(Math.random() * 100) + 10;

    //const rotation = this.state.rotation + 0.04;
    //this.setState({ rotation });

    <Bubble speed={dropRate} bubbleSize={bubbleSize} />;
    requestAnimationFrame(this.gameLoop);
  }

  createBubble() {}

  render() {
    return (
      <div className="game-wrapper">
        <div className="game-header-wrapper">
          <div className="game-header-wrapper-score">
            <Score gameScore={this.state.score} />
          </div>

          <div className="game-header-wrapper-controlls">
            <div className="game-button-pause">Pause</div>
            <div className="game-button-reset">Reset</div>
          </div>
        </div>

        <div className="game-container-wrapper">{() => this.gameLoop()}</div>
      </div>
    );
  }
}

export default Game;
