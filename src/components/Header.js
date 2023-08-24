import './style.css';
import backImage from '../assets/images/backimage.jpg';


function Header() {
    return (
        <header className="header">
            <h1 className="name">Joceliyn Valdez</h1>
            <img src={backImage} alt="background" className="backImage" />
        </header>
    );
}

export default Header;