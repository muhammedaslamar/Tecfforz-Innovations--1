import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let isValid = true;
    let errors = {};

    if (!formData.email) {
      isValid = false;
      errors.email = "Email is required";
    }

    if (!formData.password) {
      isValid = false;
      errors.password = "Password is required";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      await axios
        .post("http://localhost:1000/api/v1/login", formData)
        .then((response) => {
          if (response.data.token) {
            alert("Login successful!");
            localStorage.setItem("user", JSON.stringify(response.data.token));
            localStorage.setItem(
              "id",
              JSON.stringify(response.data.others._id)
            );
            window.location.replace("/");
          }
          else{
            alert("login error")
          }
        });
    }
  };

  return (
    <div className="form-group sign-up-container outerdiv">
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

        <button type="submit">Login</button>
      </form>
      <div className="pt-3">
        <Link to="/signup" className="alredy-login-text">Do you not have an account?</Link>
      </div>
    </div>
  );
};

export default Login;
