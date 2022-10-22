import React from "react"
function App() {
  const[time, setTime] = React.useState(0)
  const[timerOn, setTimeOn] = React.useState(false)
  
  ReactDOM.useEffect(()=>{

  },[])
  return (
    <div className="App">
      <div>{time}</div>
      <div>
        <button onClick={()=> setTimeOn(true)}>Start</button>
        <button onClick={()=> setTimeOn(false)}>Stop</button>
        <button onClick={()=> setTimeOn(true)}>Resume</button>
        <button onClick={()=> setTimeOn(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
