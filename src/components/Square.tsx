// Class Component

// import React from "react";
// import './Square.css'

// interface ISquareProps {
//     value: number
//     onClick: any
// }

// class Square extends React.Component<ISquareProps, {}> {
//     render(): React.ReactNode {
//         return (
//             <button className="square"
//                 onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         )
//     }
// }

// export default Square


// Function Component

import './Square.css'

function Square(props: any) {
    return (
        <button className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square