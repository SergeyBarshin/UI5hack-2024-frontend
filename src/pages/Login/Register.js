import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [interests, setInterests] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                username,
                password,
                interests: interests.split(',').map(tag => tag.trim()), // Преобразуем строку в массив
            });
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Interests (comma separated)"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;