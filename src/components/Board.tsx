import React from "react";
import Square from "./Square";
import './Board.css'

interface IBoardProps {
    squares: any
    onClick: any
}

interface IBoardStates {
    // squares: any
    // xIsNext: boolean
}

class Board extends React.Component<IBoardProps, IBoardStates> {
    renderSquare(i: number) {
        return <Square
            index={i}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} />
    }

    render(): React.ReactNode {
        return (
            // <div className="board">
            //     <div className="board-row">
            //         {this.renderSquare(0)}
            //         {this.renderSquare(1)}
            //         {this.renderSquare(2)}
            //     </div>
            //     <div className="board-row">
            //         {this.renderSquare(3)}
            //         {this.renderSquare(4)}
            //         {this.renderSquare(5)}
            //     </div>
            //     <div className="board-row">
            //         {this.renderSquare(6)}
            //         {this.renderSquare(7)}
            //         {this.renderSquare(8)}
            //     </div>
            // </div>

            <table className='board'>
                <tbody>
                    <tr>
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </tr>
                    <tr>
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </tr>
                    <tr>
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Board