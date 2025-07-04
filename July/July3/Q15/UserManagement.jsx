import React, { useEffect, useState } from 'react';
import axios from 'axios';

const firebaseURL = 'https://your-project-id-default-rtdb.firebaseio.com/users';

const UserManagement = () => {
  const [users, setUsers] = useState({});
  const [form, setForm] = useState({ name: '', email: '' });
  const [editId, setEditId] = useState(null);
  const [errors, setErrors] = useState({});

  // Fetch users on load
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${firebaseURL}.json`);
      setUsers(res.data || {});
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.email.trim()) {
      err.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      err.email = 'Invalid email format';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (editId) {
        await axios.patch(`${firebaseURL}/${editId}.json`, form);
      } else {
        await axios.post(`${firebaseURL}.json`, form);
      }
      setForm({ name: '', email: '' });
      setEditId(null);
      fetchUsers();
    } catch (error) {
      console.error('Error submitting user:', error);
    }
  };

  const handleEdit = (id) => {
    setForm(users[id]);
    setEditId(id);
    setErrors({});
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${firebaseURL}/${id}.json`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>User Management</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span style={styles.error}>{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}

        <button type="submit">{editId ? 'Update' : 'Add'} User</button>
      </form>

      <hr />

      <ul>
        {Object.entries(users).map(([id, user]) => (
          <li key={id} style={styles.userItem}>
            <div>
              <strong>{user.name}</strong> ({user.email})
            </div>
            <div>
              <button onClick={() => handleEdit(id)}>Edit</button>
              <button onClick={() => handleDelete(id)} style={styles.delete}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Basic styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: '30px auto',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  userItem: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
    padding: '8px',
    background: '#f1f1f1',
    borderRadius: '6px',
  },
  error: {
    color: 'red',
    fontSize: '0.9em',
  },
  delete: {
    color: 'red',
    marginLeft: '10px',
  },
};

export default UserManagement;
