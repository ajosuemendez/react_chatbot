import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import "../css/chatbot.css"

export default function ChatBox(props) {

    const {register, handleSubmit} = useForm();

    return(
        <form onSubmit={handleSubmit(props.submitHandler)}>
            <div className="w-100 d-flex justify-content-left mt-3">
                <input className="chat-input" type="text" name="message" id="message" placeholder="Message" {...register("message", {required : true})}/>
                <Button/>
            </div>
        </form>
    );
}