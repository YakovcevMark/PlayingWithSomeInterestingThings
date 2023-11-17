import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
}
const Clock = () => {
    const [clock, setClock] = useState<Date>(new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setClock(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])
    let hours = clock.getHours()
    let minutes = clock.getMinutes()
    let seconds = clock.getSeconds()
    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };
    return (
        <StyledClock>

            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle}/>
                <div className={"dial minutes"} style={minutesStyle}/>
                <div className={"dial hours"} style={hoursStyle}/>
            </div>
            <div className={"digital-clock"}>
                {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
            </div>

        </StyledClock>
    );
};
const StyledClock = styled.div`
  font-family: sans-serif;
  width: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #ccc;
  border-radius: 5px;
  margin: 5px;
  background: #ccc;

  .digital-clock {
    padding: 10px;
  }

  .analog-clock {
    width: 100px;
    height: 100px;
    border: solid 1px #000;
    border-radius: 50%;
    position: relative;
    background: #fff;

    .dial {
      position: absolute;
      left: 50%;
      width: 50px;
      height: 50px;
      transform-origin: bottom left;

      &.seconds {
        border-left: solid 1px green;
      }

      &.minutes {
        border-left: solid 1px #cc0000;
      }

      &.hours {
        width: 35px;
        height: 35px;
        top: 15px;
        border-left: solid 2px #000;
      }
    }
  }

`
export default Clock;