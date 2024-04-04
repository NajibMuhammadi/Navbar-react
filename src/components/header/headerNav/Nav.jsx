import Logo from '../logo/Logo';
import NavList from '../navList/NavList';
import './nav.css';

function Nav() {
    return (
        <nav className="header__nav">
            <Logo />
            <NavList />
        </nav >
    )
}

export default Nav
