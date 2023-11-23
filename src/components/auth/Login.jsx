import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { sendResetPasswordEmail } from '../../firebase-config';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      navigate('/');
    } catch (error) {
      alert(error.message);
      // Handle login error
    }
  };

  const handleResetPassword = async () => {
    try {
      await sendResetPasswordEmail(email);
      alert('Password reset email sent. Please check your email.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="border p-3 bg-light mx-auto"
      style={{ maxWidth: 400, marginTop: 60 }}
    >
      <h1>Login</h1>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <br />

      <button className="btn btn-link" onClick={handleResetPassword}>
        Reset Password
      </button>
      <br />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
