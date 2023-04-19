import React, { useState, useEffect } from "react";
import './App.css';
import Showlaps from './components/Showlaps';
function App() {
  const[time, setTime] = useState(0)
  const[timelap, setTimelap] = useState(0)
  const[timerOn, setTimeOn] = useState(false)
  const[laps, setLaps] = useState(false)
  const[arr, setLap] = useState([])
  // const[theme, setTheme] = useState([])
  // const max = Math.max(...arr)
  // const min = Math.min(...arr)

  const addLap = (time) => {
    // if(time == max){
    //   setTheme(current => [time, ...current])

    // }
    setLap(current => [time, ...current])
  }
  const resetLaps = () => {
    setLap([])
  }
  useEffect(()=>{
    let interval = null;
    if(timerOn){
      interval = setInterval(()=> {
        setTime(prevTime => prevTime + 10) 
        setTimelap(prevTime => prevTime + 10) 
      }, 10)
    }else{
      clearInterval(interval)
    }
    return() => clearInterval(interval)
  },[timerOn])
  
  const displayLaps = arr.map((item, index)=>{
      return <Showlaps key={index} item={item } />
  })

  return (
    <div className="main-container">
      <section className="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)},</span>
        <span id="display-ms" className="ms">{("0" +((time / 10) % 100)).slice(-2)}</span>
      </section>
      <section className="buttons-container">
        {!timerOn && time === 0 && (
          <button className="start" onClick={()=> setTimeOn(true)}>Start</button>
        )}
        {!timerOn && time > 0 && (
          <button className="reset"onClick={()=> resetLaps() + setTime(0) + setTimelap(0)}>Reset</button>
        )}
        {timerOn && time > 0 && (
          <button className="reset"onClick={()=> addLap(timelap) + setLaps(true) + setTimelap(0)}>Lap</button>
        )}
        {timerOn && (
          <button onClick={()=> setTimeOn(false)}>Stop</button>
        )}
        {!timerOn && time !== 0 && (
          <button onClick={()=> setTimeOn(true)}>Start</button>
        )}
      </section>
      <section className="laps-container">
        {time > 0 && (<Showlaps item={timelap} />)}
        {laps? displayLaps : null }
      </section>
      
    </div>
  );
}


export default App;
