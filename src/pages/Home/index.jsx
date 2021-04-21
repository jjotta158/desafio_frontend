import "./style.css";
import Header from '../../components/Header'
import {Card} from 'react-bootstrap'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <Header/>
            <h1 style={{textAlign:"center",margin:"10px"}}>Bem vindo ao Gestão de vendedores</h1>
            <section style={
                {
                    position:"absolute",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    left:"50%",
                    marginLeft:"-35%",
                    top:"50%",
                    width:"70%",
                    flexWrap:"wrap"
                }
                } class="action-card">
                <Link to="/vendedores" style={{ width: '40%',margin:"10px" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Ver Vendedores</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Aqui voce pode ver os vendedores</Card.Subtitle>
                            <Card.Link href="#">Ver</Card.Link>
                        </Card.Body>
                    </Card>
                </Link>
                <Link to="/adicionar-vendedor" style={{ width: '40%',margin:"10px" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Adicionar Vendedor</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Aqui você pode adicionar vendedores</Card.Subtitle>
                            <Card.Link href="#">Adicionar</Card.Link>
                        </Card.Body>
                    </Card>
                </Link>
                <Link to="/vendas" style={{ width: '40%',margin:"10px" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Ver Vendas</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Aqui você pode ver as vendas feitas</Card.Subtitle>
                            <Card.Link href="#">Ver</Card.Link>
                        </Card.Body>
                    </Card>
                </Link>
                <Link to="/adicionar-venda" style={{ width: '40%',margin:"10px" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Adicionar Nova Venda</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Aqui você pode adicionar novas vendas</Card.Subtitle>
                            <Card.Link href="#">Adicionar</Card.Link>
                        </Card.Body>
                    </Card>
                </Link>

            </section>
        </div>
    );
}

export default Home;