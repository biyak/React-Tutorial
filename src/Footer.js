import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';



function Footer() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "Morning"
    }
    else if (hours >= 12 && hours <= 17) {
        timeOfDay = "Afternoon"
    }
    else {timeOfDay = "Night"}

    return (
        <footer>
            <h3>Good {timeOfDay}</h3>
        </footer>
        )
}

export default Footer

