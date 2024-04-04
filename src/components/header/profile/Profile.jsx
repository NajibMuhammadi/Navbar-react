import './profile.css';
import profileImage from '../../../assets/profile.jpg';

function Profile() {
    return (
        <img className='header__profile-img' src={profileImage} alt="" />
    )
}

export default Profile
