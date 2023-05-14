import React from "react";
import "../css/header.css"

export default function Header() {

    const botProfilePicture = "../../images/bot-profile.png";
    const greenDotPicture = "../../images/green-dot.png";

    return(
        <div className="header-container">
            <img className="header-profile-picture" src={botProfilePicture} atl="profile"/>
            <h2 className="header-name">Alex</h2>
            <img className="header-active-icon" src={greenDotPicture} alt="active-icon"/>
            <p className="header-active-content">Active</p>
            <h1 className="header-title">Escape Room Game</h1>
        </div>
    );
}