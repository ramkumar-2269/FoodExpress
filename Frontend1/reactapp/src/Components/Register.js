import React from 'react'
import Header from './Header'
import './Header'
import './../Styling/Register.css'
const Register = ({onClose1,onClose2}) => {
  return (
    <div>
      
      <button type="button"   onClick={onClose1} class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style={{fontSize:16,border:0}}>X</button>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example1cg">Your Name</label><br/>
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" /><br/>
                  
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Your Email</label><br/>
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" /><br/>
                  
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4cg">Password</label><br/>
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" /><br/>

                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4cdg">Repeat your password</label><br/>
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" /><br/>
                  
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                <br/><label class="form-check-label" for="form2Example3g">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <br/><button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      
    </div>
  )
}

export default Register
