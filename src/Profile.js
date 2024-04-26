// Profile.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please sign up or login</p>
      )}
    </div>
  );
}

export default Profile;
