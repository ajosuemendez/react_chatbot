import React from "react";
import Message from "./Message";
import "../css/window.css"


export default function Window(props) {

    const chatContainerRef = React.useRef(null);

    const messageList = props.messageList.map((message, i) => {
        return <Message text={message.message} sender={message.author} time={message.time}key={i}/>
    })

    React.useEffect(() => {
        // scroll the chat container to the bottom
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }, [props.messageList]);

    return(
        <div ref={chatContainerRef} style={{height: "600px", overflow: "scroll"}}>
            {props.timeTitle && <h1 className="window-title show-faded mb-4">The game started at {props.timeTitle}</h1>}
            {messageList}
        </div>
    );
}