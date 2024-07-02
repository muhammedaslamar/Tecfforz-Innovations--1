import React, { useState } from 'react';
import './signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom';


const SignUp = () => {

  //State Components
  //1->password2
  const [password2, setpassword2] = useState('')

  //2->maintain db stored data
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  //3->maintain the errors
  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: ''
  });


  //Form data managing
  //1)->for handling the data except password 2
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //2)->handling the for password 2
  const handleChange2 = (e) => {
   setpassword2(e.target.value)
  };


  //Frorm validation from frontend
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


  //send the form data in to backend
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validate()) {
      if(password2 === formData.password){
      await axios.post("http://localhost:1000/api/v1/register",formData).then((response)=>{
        if(response.data.message === "Signup successful"){
        alert(response.data.message)
        window.location.replace("/login");
        }
        else{
          alert(response.data.message)
        }
      })
    }
    else{
      alert("Password miss match!!")
    }
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
        <div>
          <label>Re Password:</label>
          <input
          className="form-control"
            type="password"
            value={password2}
            onChange={handleChange2}
          />
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
