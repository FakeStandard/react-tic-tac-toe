import React from "react";
import Board from "./Board";
import './Game.css'

class Game extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{ /* status */}</div>
                    <div>{ /* TODO */}</div>
                </div>
            </div>
        )
    }
}

export default Game