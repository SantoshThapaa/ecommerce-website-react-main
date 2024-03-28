import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn, authenticate, isAuthenticated } from "../auth/authIndex";

const Login = () => {
  const navigate = useNavigate()
  const {user}=isAuthenticated()
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirect: false
  })
  const { email, password, error, redirect } = values
  // onchange handle
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    setValues({ ...values, error: false })
    // sign in process
    signIn({ email, password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error })
        }
        else {
          authenticate(data, () => {
            setValues({ ...values, redirect: true })
          })
        }
      })
  }
  // to redirect error
  const redirectUser = () => {
    if (redirect) {
      if(user && user.role === 1){
        return navigate('/admin/dashboard')
      }
      else{
        return navigate('/profile')
      }
    }
  }
  // to show error message
  const showError = () => (
    error &&
    <div className="alert alert-danger">
      {error}
    </div>
  )
  return (
    <>
      <div class="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 shadow p-3">
            <form>
              {showError()}
              {redirectUser()}
              <div class="mb-3">
                <label htmlFor="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={handleChange('email')}
                  value={email}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label htmlFor="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={handleChange('password')}
                  value={password}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
              <div className="my-2">
                <div className="d-flex justify-content-center align-items-center">
                  <Link to='/forgotpassword' className="text-decoration-none">
                    Forgot Password
                  </Link>
                  <Link to='/signup' className="text-decoration-none">Create Account</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
