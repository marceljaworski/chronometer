import React from "react"
import './App.css'
import Showlaps from './components/Showlaps'
export 
function App() {
  const[time, setTime] = React.useState(0)
  const[timelap, setTimelap] = React.useState(0)
  const[timerOn, setTimeOn] = React.useState(false)
  const[laps, setLaps] = React.useState(false)
  const[arr,setLap] = React.useState([])
  const max = Math.max(...arr)
  const min = Math.min(...arr)

  console.log(max)
  console.log(min)
  
  const addLap = (time) => {
    setLap(current => [time, ...current])
  }
  const resetLaps = () => {
    setLap([])
  }
  React.useEffect(()=>{
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
    <div className="App">
      <div className="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)},</span>
        <span className="ms">{("0" +((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timerOn && time === 0 && (
          <button className="start" onClick={()=> setTimeOn(true)}>Start</button>
          )}
        {timerOn && (
          <button onClick={()=> setTimeOn(false)}>Stop</button>
          )}
        {!timerOn && time !== 0 && (
          <button onClick={()=> setTimeOn(true)}>Resume</button>
          )}
        {!timerOn && time > 0 && (
          <button className="reset"onClick={()=> resetLaps() + setTime(0) + setTimelap(0)  }>Reset</button>
          )}
        {timerOn && time > 0 && (
          <button className="reset"onClick={()=> addLap(timelap) + setLaps(true) + setTimelap(0)}>Lap</button>
          )}
      </div>
      <div className="timelap">
        <span>{("0" + Math.floor((timelap / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((timelap / 1000) % 60)).slice(-2)},</span>
        <span className="ms">{("0" +((timelap / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="container">
        {laps? displayLaps : null }
        
      </div>
    </div>
  );
}


export default App;
