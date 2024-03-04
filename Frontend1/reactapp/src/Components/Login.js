import React from 'react'
import './../Styling/Login.css'
import './Header'
export const Login = ({onClose}) =>{
    
  return (
    <div>
        <button type="button"   onClick={onClose} class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style={{fontSize:16,border:0}}>X</button>
      <div class="myform bg-dark">
<h1 class="text-center">Login Form</h1>
<form>
    <div class="mb-3 mt-4">
        <label for="exampleInputEmail1" class="form-label">Email address</label>  <br/>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><br/>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label><br/>
        <input type="password" class="form-control" id="exampleInputPassword1"/><br/>
    </div>
    <br/><button type="submit" class="btn btn-light mt-3">LOGIN</button><br/>
   
</form>
</div>
    </div>
  )
}

export default Login
