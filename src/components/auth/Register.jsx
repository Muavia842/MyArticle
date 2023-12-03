// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth } from '../../firebase-config';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   let navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       updateProfile(auth.currentUser, { displayName: name });
//       navigate('/');
//     } catch (error) {
//       alert(error);
//       // toast(error.code, { type: 'error' });
//     }
//   };
//   return (
//     <div className="border p-3 bg-light " style={{ marginTop: 70 }}>
//       <h1>Register</h1>
//       <div className="form-group">
//         <label>Name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter your name"
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//       </div>
//       <div className="form-group">
//         <label>Email</label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter your email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//       </div>

//       <div className="form-group">
//         <label>Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Password"
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//       </div>
//       <br />
//       <button className="btn btn-primary" onClick={handleSignup}>
//         Register
//       </button>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  let navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      navigate('/');
    } catch (error) {
      alert(error);
      // toast(error.code, { type: 'error' });
    }
  };

  const containerStyle = {
    border: '1px solid #ddd',
    backgroundColor: '#f8f9fa',
    maxWidth: '400px',
    marginTop: '70px',
    padding: '15px',
    margin: 'auto',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      <h1>Register</h1>
      <div style={formGroupStyle}>
        <label>Name</label>
        <input
          type="text"
          style={{ width: '100%', padding: '10px' }}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <button style={buttonStyle} onClick={handleSignup}>
        Register
      </button>
    </div>
  );
}
