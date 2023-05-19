import React from "react";
import "../css/stats.css";

export default function Stats(props) {

    const heartImg = "../../images/Red-Heart.png";

    let heartList = [];

    for (let i = 0; i < props.currentLives; i++) {
        heartList.push(<img className="stats-heart" src={heartImg}/>)
    }

    for (let x = 0; x< props.totalLives - props.currentLives; x++) {
        heartList.push(<img className="stats-heart disable" src={heartImg}/>)
    }

    return(
        <div className="mt-2">
            {heartList}
        </div>
    );
}