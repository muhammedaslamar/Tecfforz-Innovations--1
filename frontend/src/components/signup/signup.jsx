import React, { useState } from 'react';
import './signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let isValid = true;
    let errors = {};

    if (!formData.email) {
      isValid = false;
      errors.email = 'Email is required';
    }

    if (!formData.username) {
      isValid = false;
      errors.username = 'Username is required';
    }

    if (!formData.password) {
      isValid = false;
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validate()) {
      await axios.post("http://localhost:1000/api/v1/register",formData).then((response)=>{
        if(response.data){
        alert("signup completed!!")
        window.location.replace("/login");
        }
      })
    }
    else{
      alert("error!!!")
    }
  };
  

  return (
    <div className="outerdiv">
    <div className="form-group sign-up-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
          className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Username:</label>
          <input
          className="form-control"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
          className="form-control"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="pt-3">
        <Link to="/login" className="alredy-login-text">Do you have alredy account?</Link>
        </div>
    </div>
    </div>
  );
};

export default SignUp;
