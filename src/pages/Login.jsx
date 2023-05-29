import React from 'react';
import { useFormik } from "formik";
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';



const loginValidationSchema = yup.object({
  email: yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const registerValidationSchema = yup.object({
  name: yup.string()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters long"),
    username: yup.string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters long"),
  email: yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});


function Login() {

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      axios.post('http://127.0.0.1:8000/api/login', {
        name: values.name,
        email: values.email,
        password: values.password
      }).then((response) => {
        const { data } = response;
        alert(data.message);
        localStorage.setItem('userToken', data.token);
      }).catch((err) => {
        console.error(err);
      });
    }
  });
  const registerFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      axios.post('http://127.0.0.1:8000/api/register', {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password
      }).then((response) => {
        const { data } = response;
        alert(data.message);
        localStorage.setItem('userToken', data.token);
      }).catch((err) => {
        console.error(err);
      });
    }
  });

  const navigate = useNavigate();
  const navigateToAccount = () => {
    navigate('/account');
  }


  return (
    <>
      <Helmet title='Login'>
        <CommonSection title='Sign-in/Sign-up' />

        <div className="section">
            <div className="row justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3"><span>Log In</span><span>Sign Up</span></h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="pb-3">
                              <img src="https://inevelle.sirv.com/assets/images/logo_white_sign%20in.svg" alt="logo" style={{width:"200px"}}/>
                            </h4>
                            
                            <form onSubmit={loginFormik.handleSubmit} className="container">
                              <div className="form-group">
                                <input type="email" name="email" className="form-style" placeholder="Your Email" id="logedEmail" required autoComplete="off" onChange={loginFormik.handleChange} value={loginFormik.values.email} />
                                <i className="input-icon uil uil-at"></i>
                              </div>
                              <div className="form-group mt-2">
                                <input type="password" name="password" className="form-style" placeholder="Your Password" id="logedPass" required autoComplete="off" onChange={loginFormik.handleChange} value={loginFormik.values.password} />
                                <i className="input-icon uil uil-at"></i>
                              </div>
                              <button className="btn mt-4" type='submit' 
                              
                              >submit</button>
                              <p className="mb-0 mt-4 text-center"><a href="/" className="link">Forgot your password?</a></p>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="pb-3">
                            <img src="https://inevelle.sirv.com/assets/images/logo_white_sign_up.svg" alt="logo" style={{width:"200px"}}/>
                            </h4>
                            
                            <form onSubmit={registerFormik.handleSubmit} className="container">
                              <div className="form-group">
                                <input type="text" name="name" className="form-style" placeholder="Your Full Name" id="logName" required autoComplete="off" onChange={registerFormik.handleChange} value={registerFormik.values.name} />
                                <i className="input-icon uil uil-user"></i>
                              </div>
                              <div className="form-group mt-2">
                                <input type="username" name="username" className="form-style" placeholder="Your Username" id="logUsername" required autoComplete="off" onChange={registerFormik.handleChange} value={registerFormik.values.username} />
                                <i className="input-icon uil uil-user"></i>
                              </div>
                              <div className="form-group mt-2">
                                <input type="email" name="email" className="form-style" placeholder="Your Email" id="logEmail" required autoComplete="off" onChange={registerFormik.handleChange} value={registerFormik.values.email} />
                                <i className="input-icon uil uil-at"></i>
                              </div>
                              <div className="form-group mt-2">
                                <input type="password" name="password" className="form-style" placeholder="Your Password" id="logPass" required autoComplete="off" onChange={registerFormik.handleChange} value={registerFormik.values.password} />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <button className="btn mt-4" 
                              type='submit'
                              
                              >submit</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Helmet>
    </>
  );
}


export default Login;
