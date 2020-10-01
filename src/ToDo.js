import React from 'react';
import ReactDOM from 'react-dom';

function ToDo(props) {
    return ( 
    <div>
        <p> {props.text}</p>
        <input type ='checkbox' checked = {props.completed}/>
    
    </div>
    )
}

export default ToDo