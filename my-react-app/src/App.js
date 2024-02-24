import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Make a GET request to localhost:3000/users
        const response = await axios.get('http://localhost:3000/users');
        // Extract the data (users) from the response
        const usersData = response.data;
        // Update the state with the users data
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
