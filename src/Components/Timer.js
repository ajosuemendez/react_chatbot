import {useEffect, useState} from "react";
import "../css/timer.css"


export default function Timer() {
    const [seconds, setSeconds] = useState(10 * 60);
    const [direction, setDirection] = useState('down');

    useEffect(() => {
        const interval = setInterval(() => {
        if (direction === 'down') {
            setSeconds(seconds => seconds - 1);
        } else {
            setSeconds(seconds => seconds + 1);
        }
        }, 1000);

        if (seconds === 0) {
        setDirection('up');
        } else if (seconds === 10 * 60) {
        setDirection('down');
        }

        return () => clearInterval(interval);
    }, [direction, seconds]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
        const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="mt-4">
            <h1 className={`timer ${direction === "up" ? "red" : Number(seconds) < 300 ? "yellow" : "green"}`}>{formatTime(seconds)}</h1>
        </div>
    );
}