import React from 'react';
import { useSelector } from 'react-redux';

const UserDetailsPage = () => {
  // Assuming 'auth' is the name of your Redux slice where user information is stored
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h2>User Details Page</h2>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <p>Email: {user.email}</p>
          {/* Add more user details here */}
        </div>
      ) : (
        <p>Please login first.</p>
      )}
    </div>
  );
};

export default UserDetailsPage;
