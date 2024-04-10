import './logo.css';
import logoIcon from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link to='/' className='header__logo-link'>
            <img className='header__logo' src={logoIcon} alt="Logo" />
        </Link>
    )
}

export default Logo
