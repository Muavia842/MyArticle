// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase-config';
// import { signOut } from 'firebase/auth';

// export default function Navbar() {
//   const [user] = useAuthState(auth);
//   return (
//     <div className="fixed-top border" style={{ backgroundColor: 'whitesmoke' }}>
//       <nav className="navbar">
//         <div>
//           <img
//             src="logo192.png"
//             width={30}
//             height={30}
//             alt="logo"
//             className="ms-5"
//           />
//         </div>
//         <Link className="nav-link" to="/">
//           Home{' '}
//         </Link>
//         <div>
//           {user && (
//             <>
//               <span className="pe-4">
//                 Signed is as {user.displayName || user.email}
//               </span>
//               <button
//                 className="btn btn-primary btn-sm me-3"
//                 onClick={() => {
//                   signOut(auth);
//                 }}
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import AddArticle from './AddArticle';
import styles from './Navbar.css';
export default function Navbar() {
  const [user] = useAuthState(auth);
  const [showAddArticleModal, setShowAddArticleModal] = useState(false);

  const handleCreateArticleClick = () => {
    setShowAddArticleModal(true);
  };

  const handleCloseModal = () => {
    setShowAddArticleModal(false);
  };

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    borderBottom: '1px solid #ddd',
    backgroundColor: 'whitesmoke',
  };

  const logoStyle = {
    marginLeft: '15px',
  };

  const linkStyle = {
    marginLeft: '15px',
    textDecoration: 'none',
    color: 'black',
  };

  const userInfoStyle = {
    paddingRight: '15px',
    display: 'flex',
    alignItems: 'center',
  };

  const logoutButtonStyle = {
    marginLeft: '15px',
  };

  return (
    <div style={navbarStyle}>
      <nav className="navbar">
        <div style={logoStyle}>
          <img src="logo192.png" width={30} height={30} alt="logo" />
        </div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <div style={userInfoStyle}>
          {user && (
            <>
              <span>Signed in as {user.displayName || user.email}</span>

              <button onClick={handleCreateArticleClick}>Create Article</button>
              <button
                className="btn btn-primary btn-sm"
                style={logoutButtonStyle}
                onClick={() => signOut(auth)}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
      {showAddArticleModal && (
        // <AddArticle />
        <div className={styles.modalWrapper}>
          <div className={styles.modalContent}>
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <AddArticle onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
}
