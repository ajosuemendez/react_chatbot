import React, { useEffect } from "react";
import Window from "./Window";
import ChatBox from "./ChatBox";
import Header from "./Header";
import Timer from "./Timer";
import Stats from "./Stats";
// import useAxios from "../hooks/useAxios";
// import axios from '../apis/rasaAPI';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import Container from "react-bootstrap/esm/Container";
import "../css/app.css"

export default function App() {

    const [chatMessageList, setChatMessageList] = React.useState([]);

    const [isGameStarted, setIsGameStarted] = React.useState(false);
    const [gameStartTime, setGameStartTime] = React.useState();

    const totalLives = 10
    const [currentLives, setCurrentLives] = React.useState(totalLives);

    
    const [inputMessage, setInputMessage] = React.useState(); 
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const counterRef = React.useRef(0);

    function submitHandler(data) {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const time = `${Number(hours)< 10 ? "0" : ""}${hours}:${Number(minutes)< 10 ? "0" : ""}${minutes}`;

        const formData = {  author: "user",
                            message: data.message,
                            time: time
                    }
        setInputMessage(formData);
        setChatMessageList(prev => {
            return [
                ...prev,
                formData
        ]
        });
    }

    React.useEffect(() => {
        if(chatMessageList.length === 1) {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const time = `${Number(hours)< 10 ? "0" : ""}${hours}:${Number(minutes)< 10 ? "0" : ""}${minutes}:${Number(seconds)< 10 ? "0" : ""}${seconds}`;

            setGameStartTime(time);
            setIsGameStarted(true);

            

        }

    }, [chatMessageList])

    
    React.useEffect(()=>{
        
       if (inputMessage !== undefined) {
            setIsLoading(true);
            axios.post('http://localhost:4000/', inputMessage)
              .then(response => {
                setIsLoading(false);
                response.data.forEach(message => {
                    setChatMessageList(prev => {
                        return [...prev, message];
                    })
                    if (message.message.includes("You have lost a life!")) {
                        setCurrentLives(prev => prev - 1)
                    }
                })

              })
              .catch(error => {
                setIsLoading(false);
                setError(error);
              });
          }

    },[inputMessage])

    // GET THE FIRST MESSAGE FROM THE CHAT
    React.useEffect(()=>{

        if(counterRef.current < 1) {
        
        setIsLoading(true);
        axios.get('http://localhost:4000/')
        .then(response => {
            setIsLoading(false);
            response.data.forEach(message => {
                setChatMessageList(prev => {
                    return [...prev, message];
                })
            })

        })
        .catch(error => {
            setIsLoading(false);
            setError(error);
        });

        counterRef.current = counterRef.current + 1;

    }


     },[])

    return(
        <>  
            <Container className="d-flex justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "800px"}}>
                    <Header/>
                    <Window messageList={chatMessageList} timeTitle={gameStartTime}/>
                    <ChatBox submitHandler={submitHandler}/>
                    <Stats currentLives={currentLives} totalLives={totalLives}/>
                    <Timer/>
                </div>
            </Container>
        </>
    )
}