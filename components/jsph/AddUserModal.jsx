import React, { useState } from "react";

export default function AddUserModal({ isOpen, onClose, onAddUser }) {
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    lat: "",
    lng: "",
    companyName: "",
    catchPhrase: "",
    bs: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onAddUser(userData);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add New User</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Website:
            <input
              type="text"
              name="website"
              value={userData.website}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Street:
            <input
              type="text"
              name="street"
              value={userData.street}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Suite:
            <input
              type="text"
              name="suite"
              value={userData.suite}
              onChange={handleInputChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={userData.city}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Zipcode:
            <input
              type="text"
              name="zipcode"
              value={userData.zipcode}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Latitude:
            <input
              type="text"
              name="lat"
              value={userData.lat}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Longitude:
            <input
              type="text"
              name="lng"
              value={userData.lng}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={userData.companyName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Catch Phrase:
            <input
              type="text"
              name="catchPhrase"
              value={userData.catchPhrase}
              onChange={handleInputChange}
            />
          </label>
          <label>
            BS:
            <input
              type="text"
              name="bs"
              value={userData.bs}
              onChange={handleInputChange}
            />
          </label>
          <button type="button" onClick={handleSubmit}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}
