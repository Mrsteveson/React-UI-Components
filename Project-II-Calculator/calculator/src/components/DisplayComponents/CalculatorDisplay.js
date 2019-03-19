import React from 'react';
import './Display.css';


function CalcDisplay(props){
    return(
        <div className = "calc-display">
            <h2>{props.currentValue}</h2>
        </div>
    );
}

export default CalcDisplay;