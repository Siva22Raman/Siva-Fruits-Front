import React, { useState } from "react";
import axios from "axios";
import './psell.css'; 
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

function Salf() {
  const na = useNavigate();
  const us = useSelector((state) => state.cart.user);
  const [formData, setFormData] = useState({
    name: `${us.uname}`,
    phone: `${us.phone}`,
    uid: `${us.uid}`,
    image: null,
    price: null,
    model: "",
    desc: "",
    type: "",
    duration: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, image, uid, model, price, desc, type, duration } = formData;

    // Validate phone number format (10 digits)
    const isPhoneValid = /^\d{10}$/.test(phone);

    if (!name || !phone || !uid || !model || !price || !desc || !type || !duration) {
      toast.error("Please fill in all fields.");
    } else if (!isPhoneValid) {
      toast.error("Phone number must have exactly 10 digits.");
    } else {
      const formDataToSend = new FormData();
      formDataToSend.append("name", name);
      formDataToSend.append("phone", phone);
      formDataToSend.append("uid", uid);
      formDataToSend.append("model", model);
      formDataToSend.append("price", price);
      formDataToSend.append("desc", desc);
      formDataToSend.append("type", type);
      formDataToSend.append("duration", duration);
      formDataToSend.append("image", image);

      try {
        const response = await axios.post("https://fruitsbe.onrender.com/p/product/ap", formDataToSend);
        console.log(response.data);
        toast.success(`Your product ${model} is on sale`);
        na("/ps");
      } catch (error) {
        console.error("Error uploading data:", error);
      }
    }
  };

  return (
    <div className="asd">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Product Details</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                name="uid"
                placeholder="User Id"
                value={formData.uid}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="model"
                placeholder="Model Name"
                value={formData.model}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="desc"
                placeholder="Description"
                value={formData.desc}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="type"
                placeholder="Type"
                value={formData.type}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="number"
                name="duration"
                placeholder="Duration"
                value={formData.duration}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="action">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Salf;
