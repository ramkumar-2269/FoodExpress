import React,{ useState} from 'react'
import axios from 'axios'
import './../Styling/Login.css'
import user_icon from './../Assests/email.png'
import password_icon from './../Assests/password.png'
import person_icon from './../Assests/person.png'

const Register = () => {
  const [user,setUser]=useState({
    name:"",email:" "
  })
  let name ,value;
const handleInputs=(e)=>{
name=e.target.name
value=e.target.value
setUser({...user,[name]:value});
}

const handleSubmit = () => {
  console.log(user);
  axios.post("http://localhost:8080/user/addUser",user)
    .then(response =>console.log(response.data))
}


  return (
    <div>
      
      <div className='form'  >
      <div className='container'>
        <div className='header1'>
          <div className='text'><b>SignIn</b></div>
          <div className='input-container'>
            <div className='input'>
            <img src={person_icon} alt=''/>
              <input type='text' style={{border:0,outline:0}} placeholder='Name' name='name'
                value={user.name}
                onChange={handleInputs}/> 
            </div>
            <div className='input'>
              <img src={user_icon} alt=''/>
              
              <input type='email' id ="emal" style={{border:0,outline:0}} placeholder='Email' name='email'
               value={user.email}
               onChange={handleInputs}/>
            
            </div>

            <div className="input">
                     <img src={password_icon} alt=''/>
                     <input type='mobile' id ="pas" style={{border:0,outline:0}} placeholder='mobile' name="mobile" 
                      value={user.mobile}
                      onChange={handleInputs}/>
                 </div>


               <div className="input">
                     <img src={password_icon} alt=''/>
                     <input type='password' id ="pas" style={{border:0,outline:0}} placeholder='Password' name="password" 
                      value={user.password}
                      onChange={handleInputs}/>
                 </div>
          </div>
              <button type='sumbit' className='subm' onClick={handleSubmit}><b>Register</b></button>
            
          
        </div>
      </div>
      </div>
    

    </div>
  )
}

export default Register
