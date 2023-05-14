import React from "react";
import "../css/message.css"

export default function Message(props) {
    const botProfilePicture = "../../images/bot-profile.png";
    const userProfilePicture = "../../images/user-profile.png";

    return(
        <div className={`message-container show-faded-up ${props.sender === "chatBot" ? "": "message-right"}`}>
            
            {props.sender === "chatBot" && 
                <div className="msg-profile-container">
                    <img className="msg-profile-picture" src={props.sender === "chatBot" ? botProfilePicture: userProfilePicture} alt="profile-picture"/>
                </div>
            }


            <div className="message-text-time-container">
                <div className={`message-text-container ${props.sender}-msg-background`}>
                    <p className="message-text">{props.text}</p>
                </div>
                <p className="timestemp-text">{props.sender === "chatBot" ? <span className="emphasis">Chatbot Alex</span> : <span className="emphasis">You</span>} at {props.time}</p>
            </div>
            
            

            {props.sender !== "chatBot" && 
                <div className="msg-profile-container">
                    <img className="msg-profile-picture" src={props.sender === "chatBot" ? botProfilePicture: userProfilePicture} alt="profile-picture"/>
                </div>
            }
            
        </div>
    );
}