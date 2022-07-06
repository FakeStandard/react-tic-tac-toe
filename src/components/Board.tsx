import React from "react";
import Square from "./Square";
import './Board.css'

interface IBoardProps {

}

interface IBoardStates {
    squares: any
    xIsNext: boolean
}

class Board extends React.Component<IBoardProps, IBoardStates> {
    constructor(props: IBoardProps) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    handleClick(i: any) {
        const squares = this.state.squares.slice()
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })
    }

    renderSquare(i: number) {
        return <Square value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} />
    }

    render(): React.ReactNode {
        const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board