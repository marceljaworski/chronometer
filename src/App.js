import React, { useState, useEffect } from "react";
import './App.css';
import Showlaps from './components/Showlaps';
function App() {
  const[time, setTime] = useState(0)
  const[timelap, setTimelap] = useState(0)
  const[timerOn, setTimeOn] = useState(false)
  const[laps, setLaps] = useState(false)
  const[arr, setLap] = useState([])
  const[lapCount, setLapCount] = useState(1)
  const[max, setMax] =useState(null)
  const[min, setMin] =useState(null)
  // const[theme, setTheme] = useState([])
  
  
  
  const addLap = (time) => {
    setLapCount(lapCount + 1)
    setLap(current => [{time:time, lap: lapCount}, ...current])
    if( arr.length >= 2){
      const max = Math.max(...arr.map((el) => el.time))
      const min = Math.min(...arr.map((el) => el.time))
      setMax(max) 
      setMin(min) 
    }
  }
  const resetLaps = () => {
    setLap([])
    setLapCount(1)
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
    let lap = index + 1;
      return <Showlaps key={index} item={item} max={max} min={min} lap={lap} />
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
        {/* {time > 0 && (<Showlaps item={timelap} />)} */}
        {laps? displayLaps : null }
      </section>
      
    </div>
  );
}


export default App;
