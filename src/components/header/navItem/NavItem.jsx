import './navItem.css';
import { Link } from 'react-router-dom';

function NavItem() {
    return (
        <li className='header__navItem'>
            <Link to='/' className='header__navItem-link'>Collections</Link>
            <Link to='/men' className='header__navItem-link'>Men</Link>
            <Link to='/women' className='header__navItem-link'>Women</Link>
            <Link to='/about' className='header__navItem-link'>About</Link>
            <Link to='/contact' className='header__navItem-link'>Contact</Link>
        </li>
    )
}

export default NavItem
