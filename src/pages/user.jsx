import React, { useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { login, setUserData } from "../actions/authActions"; // Importez votre action de mise à jour d'utilisateur
import EditName from "../components/edit-name";


function Profil() {
  const {user, token} = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false); // État local pour gérer l'édition du nom
  const dispatch = useDispatch();

  // Fonction de mise à jour de l'utilisateur
  const handleEditName = async (firstName, lastName) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile/', {
          
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              "Authorization":"Bearer " + token
          },
          body: JSON.stringify({ firstName, lastName }),
      });
      
      if (!response.ok) {
          throw new Error('Authentication failed');
      }

      // Handle successful authentication
      const data = await response.json()
      console.log('modification reusi', data);
      
      dispatch(login(data))

      dispatch(setUserData(data))
      // Rediriger vers la page de profil après la connexion réussie
      setIsEditing(false);
  } catch (error) {
      console.error('update error:', error.message);
      
  }
    
  };


  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <EditName setUserData={handleEditName} />
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {user?.firstName + " " + user?.lastName}
            </h1>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profil;
