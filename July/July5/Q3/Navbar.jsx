import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/profile" style={{ marginRight: '15px' }}>Profile</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}

export default Navbar;
