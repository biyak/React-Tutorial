import React from 'react';
import ReactDOM from 'react-dom';

function ToDo(props) {
    return ( 
    <div>
        <p> {props.item.text}</p>
        <input type ='checkbox' checked = {props.item.completed}/>
    
    </div>
    )
}

export default ToDo