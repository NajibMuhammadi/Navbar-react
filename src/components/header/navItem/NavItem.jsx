import './navItem.css';

function NavItem({ link, task }) {
    return (
        <li className='header__navItem'>
            <a className='header__nav-link ' href={link} >{task}</a>
        </li>
    )
}

export default NavItem
