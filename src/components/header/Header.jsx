import Cart from './cart/Cart'
import './header.css'
import Nav from './headerNav/Nav'
import Profile from './profile/Profile'

function Header() {

    return (
        <div className='header'>
            <Nav />
            <div className='header__cart'>
                <Cart />
                <Profile />
            </div>
        </div>
    )
}

export default Header
