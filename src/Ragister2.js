import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';


export default function Ragister2() {


    const[username,setUsername]= useState('');
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');

    let submitData=()=>{

        console.log(username);
        console.log(email);
        console.log(password);
        var data={
            "username":username,
            "email":email,
            "password":password
        }
        axios
        .post('https://infinite-falls-62114.herokuapp.com/api/auth/local/register',data)
        .then(response=>{
            if(response.status===200){
                swal("Good job!", "user Ragistrashion Successfully", "success");

                
            }
            window.localStorage.setItem('userInfo', JSON.stringify(response.data) )

        })
        .catch(error=>{

        })
    }


  return (
  <div className="row">
        <div className="col-6 offset-5 mt-5 ">
          <h1  className="text-center">Ragistrashion Form 2</h1>
          <form className="">
          <input type="text" name="username" className="form-control" placeholder="Username" value={username} onChange={(e)=>{ setUsername(e.target.value)  }} /> <br/>
          <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
          
          <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>{ setPassword(e.target.value)  }} /> <br/>
                 <div className="d-grid gap-2">
                        <button className="btn btn-info" type="button" onClick={ ()=>{ submitData() } }>Submit</button>
                    </div>
                    
          </form>
        </div>
      </div>
      )
}
