import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Mano puslapis</h1>
            <ul className="nav-links">
                <li><a href="#paslaugos">Paslaugos</a></li>
                <li><a href="#apie">Apie mus</a></li>
                <li><a href="#kontaktai">Kontaktai</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;