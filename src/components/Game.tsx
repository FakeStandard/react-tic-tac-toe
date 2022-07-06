import React from "react";
import Board from "./Board";
import './Game.css'

interface IGameProps {

}

interface IGameStates {
    history: any
    xIsNext: boolean
    stepNumber: number
}

class Game extends React.Component<IGameProps, IGameStates> {
    constructor(props: IGameProps) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
        }
    }

    handleClick(i: any) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    jumpTo(step: any) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    restartGame() {
        console.log('restart')
        this.setState({
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        })
    }

    // Check win or lose
    calculateWinner(squares: any) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
                return squares[a]
        }

        return null
    }

    render(): React.ReactNode {
        const history = this.state.history
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares)

        // const moves = history.map((step: any, move: any) => {
        //     const desc = move ?
        //         'Go to move #' + move :
        //         'Go to game start';
        //     return (
        //         <li key={move}>
        //             <button onClick={() => this.jumpTo(move)}>{desc}</button>
        //         </li>
        //     );
        // });

        let status;

        if (winner) {

            // status = `Winner: ${winner}`

            status =
                <div className="winner">
                    <span className="win-blue">Winner </span>
                    <span className="win-red">{winner}</span>
                </div>
        }
        else
            status = <div className="winner">Next player: {this.state.xIsNext ? 'X' : 'O'}</div>

        return (
            <div>
                <div className="game-title">
                    <h1>Tic Tac Toe</h1>
                </div>

                <div className="description">
                    <p>遊戲方法：</p>
                    <p>
                        玩家交替點擊任一位置佔領區塊，將代表自己的代號連成一條線即可獲勝。
                    </p>
                    <p>
                        橫線、直線、斜線皆可獲勝
                    </p>
                    {/* <p>遊戲目標：將所持的代號連成一條線即獲勝</p> */}
                </div>

                <Board squares={current.squares}
                    onClick={(i: any) => this.handleClick(i)} />

                <div className="game-info">
                    {/* <div>{status}</div> */}
                    {status}
                    {/* <ol>{moves}</ol> */}
                </div>

                <button onClick={() => this.restartGame()} className="new-button">New Game</button>
            </div>
        )
    }
}

export default Game