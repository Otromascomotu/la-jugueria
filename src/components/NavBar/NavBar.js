import './NavBar.css';
import logo from '../../assets/images/logo.svg';

function NavBar() {
  return (
    <nav className="topnav">
      <img alt="logo de la empresa" className="logo" src="{logo}" />
      <ul>
        <a href="#Productos">Productos</a>
        <a href="#Contacto">Contacto</a>
      </ul>
    </nav>
  );
}

export default NavBar;