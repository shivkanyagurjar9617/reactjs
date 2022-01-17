

import {useEffect, useState } from 'react';
import './App.css';
import swal from 'sweetalert';

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

  
 
 
    fetch("https://infinite-falls-62114.herokuapp.com/api/students",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body:JSON.stringify(data)
    }).then((d)=>{
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
