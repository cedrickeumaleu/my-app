import React, { useState } from "react";

import { updateUserData } from "../actions/authActions";

function EditName({ setUserData }) {
  const [newFirstName, setNewFirstName] = useState();
  const [newLastName, setNewLastName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les nouvelles données de l'utilisateur au store Redux
    setUserData(newFirstName, newLastName);
  };

  const handleCancel = () => {
    // Appelez la fonction de rappel onCancel pour annuler l'édition
    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Welcome back</h1>
      </div>
      <div className="form-edit">
        <div className="input">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="firsname"
            placeholder="FirstName"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="lastname"
            placeholder="LastName"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
          />
        </div>
      </div>

      <button className="save" type="submit">
        Save
      </button>
      <button className="cancel" type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
export default EditName;
