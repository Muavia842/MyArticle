// import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
// import React, { useState, useEffect } from 'react';
// import { auth, db } from '../firebase-config';
// import DeleteArticle from './DeleteArticle';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import LikeArticle from './LikeArticle';
// import { Link } from 'react-router-dom';

// export default function Articles() {
//   const [articles, setArticles] = useState([]);
//   const [user] = useAuthState(auth);
//   useEffect(() => {
//     const articleRef = collection(db, 'Articles');
//     const q = query(articleRef, orderBy('createdAt', 'desc'));
//     onSnapshot(q, (snapshot) => {
//       const articles = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setArticles(articles);
//       console.log(articles);
//     });
//   }, []);
//   return (
//     <div>
//       {articles.length === 0 ? (
//         <p>No articles found!</p>
//       ) : (
//         articles.map(
//           ({
//             id,
//             title,
//             description,
//             imageUrl,
//             createdAt,
//             createdBy,
//             userId,
//             likes,
//             comments,
//           }) => (
//             <div className="border mt-3 p-3 bg-light" key={id}>
//               <div className="row">
//                 <div className="col-3">
//                   <Link to={`/article/${id}`}>
//                     <img
//                       src={imageUrl}
//                       alt="title"
//                       style={{ height: 180, width: 180 }}
//                     />
//                   </Link>
//                 </div>
//                 <div className="col-9 ps-3">
//                   <div className="row">
//                     <div className="col-6">
//                       {createdBy && (
//                         <span className="badge bg-primary">{createdBy}</span>
//                       )}
//                     </div>
//                     <div className="col-6 d-flex flex-row-reverse">
//                       {user && user.uid === userId && (
//                         <DeleteArticle id={id} imageUrl={imageUrl} />
//                       )}
//                     </div>
//                   </div>
//                   <h3>{title}</h3>
//                   <p>{createdAt.toDate().toDateString()}</p>
//                   <h5>{description}</h5>

//                   <div className="d-flex flex-row-reverse">
//                     {user && <LikeArticle id={id} likes={likes} />}
//                     <div className="pe-2">
//                       <p>{likes?.length} likes</p>
//                     </div>
//                     {comments && comments.length > 0 && (
//                       <div className="pe-2">
//                         <p>{comments?.length} comments</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         )
//       )}
//     </div>
//   );
// }

import {
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  getDoc,
} from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase-config';
import DeleteArticle from './DeleteArticle';
import { useAuthState } from 'react-firebase-hooks/auth';
import LikeArticle from './LikeArticle';
import { Link } from 'react-router-dom';
import Styles from './Articles.css';
export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDocRef = doc(db, 'Users', user.uid);
        const userDocSnap = await getDoc(userDocRef);
        setUserData(userDocSnap.exists() ? userDocSnap.data() : null);
      }
    };

    fetchUserData();

    const articleRef = collection(db, 'Articles');
    const q = query(articleRef, orderBy('createdAt', 'desc'));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
    });
  }, [user]);

  return (
    <div className="articlesContainer">
      {articles.map(
        ({
          id,
          title,
          description,
          imageUrl,
          createdAt,
          createdBy,
          userId,
          likes,
          comments,
        }) => (
          <div className="cardWrapper" key={id}>
            <div>
              <div>
                <Link to={`/article/${id}`}>
                  <img
                    src={imageUrl}
                    alt="title"
                    style={{ maxWidth: '50%', height: 'auto' }}
                  />
                </Link>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    {createdBy && <span className="">{createdBy}</span>}
                  </div>
                  <div className="">
                    {user && user.uid === userId && (
                      <DeleteArticle id={id} imageUrl={imageUrl} />
                    )}
                  </div>
                </div>
                <h3>{title}</h3>
                <p>{createdAt.toDate().toDateString()}</p>
                <p>{description}</p>

                <div className="">
                  {user && <LikeArticle id={id} likes={likes} />}
                  <div className="">
                    <p>{likes?.length} likes</p>
                  </div>
                  {comments && comments.length > 0 && (
                    <div className="">
                      <p>{comments?.length} comments</p>
                    </div>
                  )}
                </div>

                {userData && userData.photoURL && (
                  <div>
                    <img
                      src={userData.photoURL}
                      alt="user"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

// import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
// import React, { useState, useEffect } from 'react';
// import { auth, db } from '../firebase-config';
// import DeleteArticle from './DeleteArticle';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import LikeArticle from './LikeArticle';
// import { Link } from 'react-router-dom';

// export default function Articles() {
//   const [articles, setArticles] = useState([]);
//   const [user] = useAuthState(auth);

//   useEffect(() => {
//     const articleRef = collection(db, 'Articles');
//     const q = query(articleRef, orderBy('createdAt', 'desc'));
//     onSnapshot(q, (snapshot) => {
//       const articles = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setArticles(articles);
//     });
//   }, []);

//   const articleStyle = {
//     border: '1px solid #ddd',
//     margin: '10px 0',
//     padding: '10px',
//     backgroundColor: '#f8f9fa',
//   };

//   const imageStyle = {
//     height: 'auto',
//     width: '180px',
//   };

//   const badgeStyle = {
//     backgroundColor: '#007bff',
//     color: '#fff',
//     padding: '5px',
//   };

//   const flexRowReverseStyle = {
//     display: 'flex',
//   };

//   const commentCountStyle = {
//     paddingLeft: '10px',
//   };

//   return (
//     <div>
//       {articles.length === 0 ? (
//         <p>No articles found!</p>
//       ) : (
//         articles.map(
//           ({
//             id,
//             title,
//             description,
//             imageUrl,
//             createdAt,
//             createdBy,
//             userId,
//             likes,
//             comments,
//           }) => (
//             <div style={articleStyle} key={id}>
//               <div style={{ display: 'flex' }}>
//                 <div style={{ flex: '1', marginLeft: '10px' }}>
//                   <div style={{ display: 'flex' }}>
//                     <div style={{ flex: '1' }}>
//                       <h1>{title}</h1>
//                     </div>
//                     <div style={flexRowReverseStyle}>
//                       {user && user.uid === userId && (
//                         <DeleteArticle id={id} imageUrl={imageUrl} />
//                       )}
//                     </div>
//                   </div>
//                   <div style={{ flex: '1' }}>
//                     {createdBy && <span style={badgeStyle}>{createdBy}</span>}
//                   </div>
//                   <p>{createdAt.toDate().toDateString()}</p>
//                   <h5>{description}</h5>
//                   <div>
//                     <Link to={`/article/${id}`}>
//                       <img src={imageUrl} alt="title" style={imageStyle} />
//                     </Link>
//                   </div>
//                   <div style={flexRowReverseStyle}>
//                     {user && <LikeArticle id={id} likes={likes} />}
//                     <div style={commentCountStyle}>
//                       <p>{likes?.length} likes</p>
//                     </div>
//                     {comments && comments.length > 0 && (
//                       <div style={commentCountStyle}>
//                         <p>{comments?.length} comments</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         )
//       )}
//     </div>
//   );
// }

// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   getDocs,
//   doc,
//   getDoc,
// } from 'firebase/firestore';
// import React, { useState, useEffect } from 'react';
// import { auth, db } from '../firebase-config';
// import DeleteArticle from './DeleteArticle';
// import LikeArticle from './LikeArticle';
// import { Link } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';

// export default function Articles() {
//   const [articles, setArticles] = useState([]);
//   const [users, setUsers] = useState({});
//   const [user] = useAuthState(auth);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const usersRef = collection(db, 'Users');
//       const usersSnapshot = await getDocs(usersRef);
//       const usersData = {};
//       usersSnapshot.forEach((doc) => {
//         usersData[doc.id] = doc.data();
//       });
//       setUsers(usersData);
//     };

//     const articleRef = collection(db, 'Articles');
//     const q = query(articleRef, orderBy('createdAt', 'desc'));

//     onSnapshot(q, (snapshot) => {
//       const articles = snapshot.docs.map(async (doc) => {
//         const data = doc.data();
//         const userData = await getUserData(data.userId);
//         return {
//           id: doc.id,
//           ...data,
//           userData: userData || {}, // Empty object if user data is not available
//         };
//       });

//       Promise.all(articles).then((articlesData) => {
//         setArticles(articlesData);
//       });
//     });

//     fetchUserData();
//   }, []);

//   const getUserData = async (userId) => {
//     const userDocRef = doc(db, 'Users', userId);
//     const userDocSnap = await getDoc(userDocRef);
//     return userDocSnap.exists() ? userDocSnap.data() : null;
//   };

//   const articleStyle = {
//     border: '1px solid #ddd',
//     margin: '10px 0',
//     padding: '10px',
//     backgroundColor: '#f8f9fa',
//   };

//   const imageStyle = {
//     height: 'auto',
//     width: '180px',
//   };

//   const badgeStyle = {
//     backgroundColor: '#007bff',
//     color: '#fff',
//     padding: '5px',
//   };

//   const flexRowReverseStyle = {
//     display: 'flex',
//   };

//   const commentCountStyle = {
//     paddingLeft: '10px',
//   };

//   return (
//     <div>
//       {articles.length === 0 ? (
//         <p>No articles found!</p>
//       ) : (
//         articles.map(
//           ({
//             id,
//             title,
//             description,
//             imageUrl,
//             createdAt,
//             createdBy,
//             userId,
//             likes,
//             comments,
//             userData,
//           }) => (
//             <div style={articleStyle} key={id}>
//               <div style={{ display: 'flex' }}>
//                 <div style={{ flex: '1', marginLeft: '10px' }}>
//                   <div style={{ display: 'flex' }}>
//                     <div style={{ flex: '1' }}>
//                       <h1>{title}</h1>
//                     </div>
//                     <div style={flexRowReverseStyle}>
//                       {user && user.uid === userId && (
//                         <DeleteArticle id={id} imageUrl={imageUrl} />
//                       )}
//                     </div>
//                   </div>
//                   <div style={{ flex: '1' }}>
//                     {userData && (
//                       <div>
//                         {userData.photoURL ? (
//                           <img
//                             src={userData.photoURL}
//                             alt="user"
//                             style={{
//                               width: '50px',
//                               height: '50px',
//                               borderRadius: '50%',
//                             }}
//                           />
//                         ) : null}
//                         <span style={badgeStyle}>{createdBy}</span>
//                       </div>
//                     )}
//                   </div>
//                   <p>{createdAt.toDate().toDateString()}</p>
//                   <h5>{description}</h5>
//                   <div>
//                     <Link to={`/article/${id}`}>
//                       <img src={imageUrl} alt="title" style={imageStyle} />
//                     </Link>
//                   </div>
//                   <div style={flexRowReverseStyle}>
//                     {user && <LikeArticle id={id} likes={likes} />}
//                     <div style={commentCountStyle}>
//                       <p>{likes?.length} likes</p>
//                     </div>
//                     {comments && comments.length > 0 && (
//                       <div style={commentCountStyle}>
//                         <p>{comments?.length} comments</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         )
//       )}
//     </div>
//   );
// }
