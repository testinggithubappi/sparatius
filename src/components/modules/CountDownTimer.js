import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom";

export default function CountDownTimer({hoursMinSecs}) {
    const history = useHistory();
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);

        console.log('timerId',timerId)
        return () => clearInterval(timerId);
    });
    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) {
            localStorage.setItem("timeMinute",0);
            localStorage.setItem("timeSec",0);
            reset();
           
        }
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
            localStorage.setItem("timeMinute",mins);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
            // localStorage.setItem("timeMinute",mins);
            localStorage.setItem("timeSec",secs);
        } else {
            setTime([hrs, mins, secs - 1]);
            localStorage.setItem("timeMinute",mins);
            localStorage.setItem("timeSec",secs);
        }
    };


    const reset = () => {
        setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
        history.push(`/login`);

    };

    
    
    return (
        <div>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    )
}

