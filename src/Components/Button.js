import React from "react";
import "../css/button.css"

export default function Button(props) {

    function clearInput() {
        let messageValue = document.getElementById("message");
        if (messageValue === null) return;
        if (messageValue !== "") {
            messageValue.value = ""
        }
    }

   return(
    <div className="button-container">
        <button className="button-send" onClick={clearInput()}>Send</button>
    </div>
   ); 
}