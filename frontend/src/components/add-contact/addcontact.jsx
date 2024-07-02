import React, { useState,useEffect } from 'react';
import './addcontact.css'
import axios from 'axios';
import authService from '../authService' 


const Addcontact = () => {

  const userId = authService.getCurrentId()

 
  const [contact, setContact] = useState({
    name: '',
    gender: '',
    phone: '',
    image: '',
    id:userId
  });

 
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // JWT token
    const curuser = authService.getCurrentUser();
    if (curuser) {
      console.log(contact)
      const token = curuser;
      try {
        await axios.post(
          "http://localhost:1000/api/v2/addTask",
          { contact },
          { headers: { Authorization: token } }
        ).then((response) => {
          alert("Contact added");
          window.location.replace("/")
        });
      } catch (error) {
        console.error(error);
      }
    }
  
    setContact({
      name: '',
      gender: '',
      phone: '',
      image: '',
    });
  };


 


  return (
    <div className='col-lg-12'>
    <div className="container-p mt-5">
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={contact.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="image"
            name="image"
            value={contact.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Contact</button>
      </form>
      </div>
      
    </div>
  );
};

export default Addcontact;
