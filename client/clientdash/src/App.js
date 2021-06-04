import './App.css';
import React ,{useState,useEffect} from 'react'

function App() {
 const[data,setData]=useState()
 
 useEffect(()=> {
  fetch("http://localhost:5000/api")
  .then((res) => res.json())
  .then((data) => setData(data.message));
 } ,[])
 
 return (
    <div className="App">
      
        <p>{data}</p>
      
    </div>
  );
}

export default App;
