import React from "react"
import './App.css'
import Display from './components/Display'

function App() {
  const[time, setTime] = React.useState(0)
  const[timerOn, setTimeOn] = React.useState(false)
  const[lapsView, setLaps] = React.useState(false)
  // const[array,setArray] = React.useState([]);
  const array = [];
  
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
  
  const displayLaps = array.map((item, index)=>{
      return <Display key={index} item={item} />
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
          <button className="reset"onClick={()=> setTime(0)}>Reset</button>
          )}
        {timerOn && time > 0 && (
          <button className="reset"onClick={()=> array.concat([time]) &&
             setLaps(true) && console.log (time)}>Lap</button>
          )}
      </div>
      <div className="lapscontainer">
        {lapsView? displayLaps : null }
      </div>
    </div>
  );
}


export default App;
