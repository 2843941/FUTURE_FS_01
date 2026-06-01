import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#1a472a', color: 'white' }}>
      <h1>My Portfolio</h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</Link>
        <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;