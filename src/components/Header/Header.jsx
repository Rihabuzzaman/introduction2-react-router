import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/post">Post</Link>
                <Link to="/Users">Our Users</Link>
             <Link to="/contact">Contact US</Link>
             <button>click me </button>

            </nav>
        </div>
    );
};

export default Header;