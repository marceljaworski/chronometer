import React from "react"
import './App.css'
import Showlaps from './components/Showlaps'

function App() {
  const[time, setTime] = React.useState(0)
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
          <button onClick={()=> setTimeOn(true)}>Start</button>
          )}
        {timerOn && (
          <button onClick={()=> setTimeOn(false)}>Stop</button>
          )}
        {!timerOn && time !== 0 && (
          <button onClick={()=> setTimeOn(true)}>Resume</button>
          )}
        {!timerOn && time > 0 && (
          <button className="reset"onClick={()=> setTime(0) + resetLaps()}>Reset</button>
          )}
        {timerOn && time > 0 && (
          <button className="reset"onClick={()=> addLap(time) + setLaps(true)}>Lap</button>
          )}
      </div>
      <div className="container">
        {laps? displayLaps : null }
      </div>
    </div>
  );
}


export default App;
