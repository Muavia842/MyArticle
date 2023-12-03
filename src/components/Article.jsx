// import { doc, onSnapshot } from 'firebase/firestore';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useParams } from 'react-router-dom';
// import { auth, db } from '../firebase-config';
// import LikeArticle from './LikeArticle';
// import Comment from './Comment';

// export default function Article() {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [user] = useAuthState(auth);

//   useEffect(() => {
//     const docRef = doc(db, 'Articles', id);
//     onSnapshot(docRef, (snapshot) => {
//       setArticle({ ...snapshot.data(), id: snapshot.id });
//     });
//   }, [id]);
//   return (
//     <div className="container border bg-light" style={{ marginTop: 70 }}>
//       {article && (
//         <div className="row">
//           <div className="col-3">
//             <img
//               src={article.imageUrl}
//               alt={article.title}
//               style={{ width: '100%', height: '90%', padding: 10 }}
//             />
//           </div>
//           <div className="col-9 mt-3">
//             <h2>{article.title}</h2>
//             <h5>Author: {article.createdBy}</h5>
//             <div> Posted on: {article.createdAt.toDate().toDateString()}</div>
//             <hr />
//             <h4>{article.description}</h4>

//             <div className="d-flex flex-row-reverse">
//               {user && <LikeArticle id={id} likes={article.likes} />}
//               <div className="pe-2">
//                 <p>{article.likes.length}</p>
//               </div>
//               <div>
//                 <h1>hello muavia</h1>
//               </div>
//             </div>
//             {/* comment  */}

//             <Comment id={article.id} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { auth, db } from '../firebase-config';
import LikeArticle from './LikeArticle';
import Comment from './Comment';

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, 'Articles', id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, [id]);

  const containerStyle = {
    border: '1px solid #ddd',
    backgroundColor: '#f8f9fa',
    marginTop: '70px',
    padding: '15px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    padding: '10px',
  };

  const articleStyle = {
    marginTop: '3%',
    padding: '15px',
  };

  const authorStyle = {
    fontSize: '1.25rem',
    color: '#6c757d',
  };

  const postedOnStyle = {
    fontSize: '0.9rem',
    color: '#6c757d',
  };

  return (
    <div style={containerStyle}>
      {article && (
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '0 0 30%' }}>
            <img
              src={article.imageUrl}
              alt={article.title}
              style={imageStyle}
            />
          </div>
          <div style={{ flex: '0 0 70%', ...articleStyle }}>
            <h2>{article.title}</h2>
            <div style={authorStyle}>Author: {article.createdBy}</div>
            <div style={postedOnStyle}>
              Posted on: {article.createdAt.toDate().toDateString()}
            </div>
            <hr />
            <h4>{article.description}</h4>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              {user && <LikeArticle id={id} likes={article.likes} />}
              <div style={{ paddingRight: '15px' }}>
                <p>{article.likes.length}</p>
              </div>
            </div>
            {/* comment  */}
            <Comment id={article.id} />
          </div>
        </div>
      )}
    </div>
  );
}
