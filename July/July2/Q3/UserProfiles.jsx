import React, { useState, useEffect } from 'react';

// Reusable UserCard Component
const UserCard = ({ name, email, city }) => {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
};

// Main Component
const UserProfiles = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Loading state
  if (loading) {
    return <p style={styles.status}>Loading user profiles...</p>;
  }

  // Error state
  if (error) {
    return <p style={styles.status}>Error: {error}</p>;
  }

  // Render users
  return (
    <div style={styles.container}>
      <h1>User Profiles</h1>
      {users.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          city={user.address.city}
        />
      ))}
    </div>
  );
};

// Basic Inline Styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: '30px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: '15px',
    borderRadius: '8px',
    margin: '10px 0',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  status: {
    textAlign: 'center',
    fontSize: '1.2em',
    marginTop: '40px',
  },
};

export default UserProfiles;
