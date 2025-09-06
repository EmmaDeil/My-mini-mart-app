import React from 'react';
// UserCard component that receives props
function UserCard(props) {
// We can access props using dot notation
const statusColor = props.isOnline ? '#28a745' : '#dc3545';
const statusText = props.isOnline ? 'Online' : 'Offline';
return (
<div style={{
border: '1px solid #ddd',
borderRadius: '8px',
padding: '20px',
margin: '10px',
maxWidth: '300px',
boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
textAlign: 'center',
}}>
<img src={props.avatar} alt="Avatar" style={{ width: '60px', borderRadius: '50%', padding: '0', height: '60px', objectFit: 'cover' }} />
<h3>{props.name}</h3>
<p>Age: {props.age}</p>
<p>Role: {props.role}</p>
<span style={{ color: statusColor, fontWeight: 'bold' }}>
● {statusText}
</span>
</div>
);
}
export default UserCard;