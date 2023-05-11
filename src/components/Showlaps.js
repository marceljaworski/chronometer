import React from "react";
function Showlaps ({item, max, min}){
    console.log(max, min)
    return (
        <div className={`lap-item ${item === max? 'red': (item === min? 'green': '')}`}>
            <span>{("0" + Math.floor((item / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((item / 1000) % 60)).slice(-2)},</span>
            <span>{("0" +((item / 10) % 100)).slice(-2)}</span>
        </div>
    );
}
export default Showlaps