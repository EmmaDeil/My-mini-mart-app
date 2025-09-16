// import React from 'react';
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// function testpage() {
//   return (
//     <BrowserRouter>
//       <nav style={{ backgroundColor: '#f8f9fa', padding: '10px', marginBottom: '20px' }}>
//         <NavLink
//           style={({ isActive }) => ({
//             margin: '0 10px',
//             color: isActive ? '#0090fc' : '#333',
//             textDecoration: 'none',
//             fontWeight: isActive ? 'bold' : 'normal',
//           })}
//           to="/"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           style={({ isActive }) => ({
//             margin: '0 10px',
//             color: isActive ? '#0090fc' : '#333',
//             textDecoration: 'none',
//             fontWeight: isActive ? 'bold' : 'normal',
//           })}
//           to="/about"
//         >
//           About
//         </NavLink>
//         <NavLink
//           style={({ isActive }) => ({
//             margin: '0 10px',
//             color: isActive ? '#0090fc' : '#333',
//             textDecoration: 'none',
//             fontWeight: isActive ? 'bold' : 'normal',
//           })}
//           to="/contact"
//         >
//           Contact
//         </NavLink>
//       </nav>
//       <div style={{ padding: '0 20px' }}>
//         <Routes>
//           <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
//           <Route path="/about" element={<h1>About Our Application</h1>} />
//           <Route path="/contact" element={<h1>Contact Us</h1>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default testpage;