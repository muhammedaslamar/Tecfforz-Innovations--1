import React, { useState } from 'react';
import axios from 'axios';
import authService from '../authService' 
import './update.css'


function Update() {

    const userId = authService.getCurrentId()
    const  itemId =authService.getUpdateId()

 
    const [contact, setContact] = useState({
    name: '',
    gender: '',
    phone: '',
    imageUrl: '',
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
    console.log("user",userId)
    console.log("update",itemId)
      try {
        await axios.put(
          `http://localhost:1000/api/v2/updateTask/${itemId}`,
          { contact }
        ).then((response) => {
          console.log("myres",response);
        });
      } catch (error) {
        console.error(error);
      }
    
  
    setContact({
      name: '',
      gender: '',
      phone: '',
      imageUrl: '',
    });
  };

  return (
    <div>
        <div className="container-p mt-5">
        <h2>Update Contact</h2>
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
            <label htmlFor="imageUrl" className="form-label">Image URL</label>
            <input
                type="url"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                value={contact.imageUrl}
                onChange={handleChange}
                required
            />
            </div>
            <button type="submit" className="btn btn-primary">Update Contact</button>
        </form>
        </div>
    </div>
  )
}

export default Update