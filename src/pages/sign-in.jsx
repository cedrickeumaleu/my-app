import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Importez useHistory pour la redirection
import { login, setUserData} from '../actions/authActions';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State pour gérer les erreurs
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Récupérez l'objet navigate pour la redirection

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login/', {
                
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            if (!response.ok) {
                throw new Error('Authentication failed');
            }

            // Handle successful authentication
            const data = await response.json()
            console.log('User is authenticated', data);
            
            dispatch(login(data))

            const responseUserData = await fetch('http://localhost:3001/api/v1/user/profile', {
                
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization":"Bearer " + data.body.token
            }
            
        });
        
        if (!responseUserData.ok) {
            throw new Error('Authentication failed');
        }
        
        // récupération des données de l'utilisateur
        const dataUser = await responseUserData.json()
        dispatch(setUserData(dataUser))
            // Rediriger vers la page de profil après la connexion réussie
            navigate('/profil');
        } catch (error) {
            console.error('Authentication error:', error.message);
            setError('Authentication failed. Please check your email and password.');
        }
       
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit">Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default Login;

