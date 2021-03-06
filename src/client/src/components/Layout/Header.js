import React from 'react';
import Navbar from "./Navbar"
import { Col, Button, Row, Container } from 'react-bootstrap';

function Header () {
	return (
        <React.Fragment>
            <header className="main-header">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg={2} className="text-center align-self-center">
                            <a className="navbar-brand logo" href="/">El Palenque</a>
                        </Col>
                        <Col lg={5}></Col>
                        <Col lg={1} className="text-center align-self-center">
                            <Button variant="primary" href="/user/profile" className="btn-login">Perfil</Button>
                        </Col>
                        <Col lg={2} className="text-center align-self-center">
                            <form action="http://localhost:3000/api/users/logout" method="POST">
                                <Button variant="danger" type="submit" className="btn-login">Cerrar Sesión</Button>
                            </form>
                        </Col>
                        <Col lg={2} className="text-center align-self-center">
                            <Button variant="secondary" href="/user/registro" className="btn-login">Registrarse</Button>
                        </Col>
                        
                        
                        <Col lg={1} className="text-center align-self-center">
                            <a className="btn btn-secondary cart" href="/user/cart" role="button">
                            <img src="/assets/images/cart.png" alt="Carrito" />
                            </a>
                        </Col>

                        <Col lg={2} className="text-center align-self-center">
                            <Button variant="btn btn-primary" href="/user/login" className="btn-login">Ingresar</Button>
                        </Col>

                    </Row>
                </Container> 
            </header>
            <Navbar/>
        </React.Fragment>
	);
}

export default Header;
