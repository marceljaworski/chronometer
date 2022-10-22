import React from "react";
function Showlaps ({item, index}){
    
    return (
        <div className="item">
        <span>{("0" + Math.floor((item / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((item / 1000) % 60)).slice(-2)},</span>
        <span className="ms">{("0" +((item / 10) % 100)).slice(-2)}</span>
        </div>
    );
}
export default Showlaps