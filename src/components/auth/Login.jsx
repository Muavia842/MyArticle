// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../../firebase-config';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { sendResetPasswordEmail } from '../../firebase-config';

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert('Login successful!');
//       navigate('/');
//     } catch (error) {
//       alert(error.message);
//       // Handle login error
//     }
//   };

//   const handleResetPassword = async () => {
//     try {
//       await sendResetPasswordEmail(email);
//       alert('Password reset email sent. Please check your email.');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div
//       className="border p-3 bg-light mx-auto"
//       style={{ maxWidth: 400, marginTop: 60 }}
//     >
//       <h1>Login</h1>
//       <div className="form-group">
//         <label>Email</label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter your email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="form-group">
//         <label>Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>

//       <br />

//       <button className="btn btn-link" onClick={handleResetPassword}>
//         Reset Password
//       </button>
//       <br />
//       <button className="btn btn-primary" onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { sendResetPasswordEmail } from '../../firebase-config';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is already logged in, redirect to the desired page
        navigate('/');
      }
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

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

  const containerStyle = {
    border: '1px solid #ddd',
    backgroundColor: '#f8f9fa',
    maxWidth: '400px',
    marginTop: '60px',
    padding: '15px',
    margin: 'auto',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const buttonStyle = {
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1>Login</h1>
      <div style={formGroupStyle}>
        <label>Email</label>
        <input
          type="email"
          style={{ width: '100%', padding: '10px' }}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={formGroupStyle}>
        <label>Password</label>
        <input
          type="password"
          style={{ width: '100%', padding: '10px' }}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <br />

      <button
        style={{ ...buttonStyle, backgroundColor: '#fff' }}
        onClick={handleResetPassword}
      >
        Reset Password
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: '#007bff', color: '#fff' }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
