import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
                <Link to="/">HOme</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact US</Link>
            </nav>
        </div>
    );
};

export default Header;