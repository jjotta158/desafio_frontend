import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Gestão de Vendas</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/vendas">Ver Vendas</Nav.Link>
                <Nav.Link href="/adicionar-venda">Cadastrar Vendas</Nav.Link>
                <Nav.Link href="/vendedores">Vendedores</Nav.Link>
                <Nav.Link href="/adicionar-vendedor">Cadastrar Vendedor</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;