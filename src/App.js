import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer'
import ToDo from './ToDo'
import toDosData from "./ToDosData"


function App() {
  const toDoItem = toDosData.map(item => < ToDo key = {item.id} item= {item}/>)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        {toDoItem}
        < Footer />
      </header>
    </div>
  );
}

export default App;


{/* <p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React


</a> */}