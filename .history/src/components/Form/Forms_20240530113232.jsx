// import React from 'react'
import React, { useState } from 'react';
import 'Forms.scss';

const Forms = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // You can add further submission logic here
      };
  return (
    <div>
      <div className="title">Form</div>
      <div className="forms">
        
      </div>
    </div>
  )
}

export default Forms;
