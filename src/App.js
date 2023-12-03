// import Articles from './components/Articles';
// import AddArticle from './components/AddArticle';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import Article from './components/Article';
// function App() {
//   return (
//     <div className="container">
//       <Router>
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/signin" element={<Login />} />
//           <Route path="/article/:id" element={<Article />} />
//           <Route
//             path="/"
//             element={
//               <div className="row mt-5">
//                 <div className="col-md-8">
//                   <Articles />
//                 </div>
//                 <div className="col-md-4">
//                   <AddArticle />
//                 </div>
//               </div>
//             }
//           />
//         </Routes>
//         <Navbar />
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Articles from './components/Articles';
import AddArticle from './components/AddArticle';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Article from './components/Article';
import './App.css';
function App() {
  // const containerStyle = {
  //   margin: '0 auto',
  //   Width: '100%',
  //   paddingLeft: '15px',
  //   paddingRight: '15px',
  // };

  // const rowStyle = {
  //   marginTop: '5rem',
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // };

  // const col8Style = {
  //   flexBasis: '66.666667%',
  //   maxWidth: '66.666667%',
  // };

  // const col4Style = {
  //   flexBasis: '33.333333%',
  //   maxWidth: '33.333333%',
  // };

  // Media Query for medium devices (tablets, 768px and up)
  const mediaQueryMedium = '@media (min-width: 768px)';

  // Media Query for large devices (desktops, 992px and up)
  const mediaQueryLarge = '@media (min-width: 992px)';

  return (
    <div className="appContainer">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/" element={<Articles />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
