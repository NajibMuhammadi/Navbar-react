import NavItem from '../navItem/NavItem';
import './navList.css';

function NavList() {
    return (
        <ul className='header__nav-list'>
            <NavItem link='/' task='Collections' />
            <NavItem link='/' task='Men' />
            <NavItem link='/' task='Women' />
            <NavItem link='/' task='About' />
            <NavItem link='/' task='Contact' />
        </ul>

    )
}

export default NavList
