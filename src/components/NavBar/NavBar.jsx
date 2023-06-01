import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from './logo.png'


function NavBar() {
  return (
    <Navbar className="NavBar" collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="#"><img className='ImgLogo' src={img} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto letter" activeKey="/home">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
            <Nav.Link href="#">Nosotros</Nav.Link>
            <Nav.Link href="#"><CardWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;