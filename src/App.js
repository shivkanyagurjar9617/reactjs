

import {useEffect, useState } from 'react';
import './App.css';
import swal from 'sweetalert';
import BASE_URL from './Helper'

function App() {
  const [studentName,setStudentName]=useState('shivkanya')
  useEffect(()=>{
  },[])

  let myFunction=()=>{
    console.log(studentName);
  var data = {
    "data": {
      "name": studentName
    }
  }

  
 
 
    fetch(BASE_URL+"/api/students",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body:JSON.stringify(data)
    })
    .then(response => response.json()) 
    .then((d)=>{
      
      console.log(d.status);
      if(d.status === 200){
        swal("Good job!", "Data Created Successfully", "success");
      }
    }).catch((e)=>{}).finally((all)=>{});
  
    }

  


  
  




  return (
      
      <div className="App">
        { studentName }
      <form>
        <label>Enter Student Name:<br />
          <input type="text" value={ studentName } onChange={ (e)=>{ setStudentName(e.target.value)  } }/>
         
        </label><br />
        <input type="button" onClick={ myFunction } name="studentName" value="Save Student" />
      </form>
      </div>
      
      
          
  );
}



export default App;
