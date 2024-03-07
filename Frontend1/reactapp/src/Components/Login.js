import React from 'react'
import Reacr ,{useState} from 'react'
import './../Styling/Login.css'
import user_icon from './../Assests/email.png'
import password_icon from './../Assests/password.png'

const Login = (e) => {
  const [user,setUser]=useState({
    email:'',password:''

  })
  let name,value;
const handleInputs=(e)=>{
name=e.target.name
value=e.target.value
setUser({...user,[name]:value});
  }
  let stuj=JSON.stringify(user)
  console.log(stuj)
  return (
  <div className='name'>
      <div className='container'>
        <div className='header1'>
          <div className='text'><b>Login</b></div>
          <div className='input-container'>
            <div className='input'>
              <img src={user_icon} alt=''/>
              
              <input type='email' id ="emal" style={{border:0, borderBlockColor:'white',outline:0}} placeholder='Email' name='email'
              value={user.value}
              onChange={handleInputs}
              />
            
            </div>
               <div className="input">
                     <img src={password_icon} alt=''/>
                     <input type='password' id ="pas" style={{border:0,outline:0}} placeholder='Password' name='password'
                     value={user.value}
                     onChange={handleInputs} />
                 </div>
          </div>
            
          
              <button type='sumbit' className='subm'><b>Login</b></button>
            
          
        </div>
      </div>
      </div>
    
  )
}

export default Login
