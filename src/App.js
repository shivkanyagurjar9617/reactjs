
import react from 'react';
import {useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:1337/api/students",{
      method:'post'
    }).then((result)=>{
      result.json().then((response)=>{
        console.log("result",response)
        setData(response)
      })
    })
  })
  


  
  


console.log(data)

  return (
      <react.Fragment>
      <div className="App">
        
        <table border="2">
          <tbody>
          <tr>
            <td>Id</td>
            <td>name</td>
            <td>email</td>
            
          </tr>
          {
            data.map((item)=>
            <tr>
              <td>{item.Id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              
              </tr>
            )
          }
          </tbody>
        </table>
        
      </div>
      </react.Fragment>
      
          
  );
}


export default App;
