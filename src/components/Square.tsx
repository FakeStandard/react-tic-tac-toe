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
    const border_style = props.index % 2 == 0 ? `square border${props.index}` : `square`

    console.log(border_style)

    return (
        <td className={border_style} onClick={props.onClick}>
            {props.value}
        </td>
    )
}

export default Square