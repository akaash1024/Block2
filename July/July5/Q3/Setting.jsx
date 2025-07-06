import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';

function Settings() {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Settings;
