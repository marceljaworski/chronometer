import React from "react";
function Showlaps ({ item, max, min}){
    
    return (
        <div className={`lap-item ${item.time === max? 'red': (item.time === min? 'green': '')}`}>
            <p className="lap">Lap {item.lap} </p>
            <div>
                <span>{("0" + Math.floor((item.time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((item.time / 1000) % 60)).slice(-2)},</span>
                <span>{("0" +((item.time / 10) % 100)).slice(-2)}</span>
            </div>
        </div>
    );
}
export default Showlaps