import Header from '../../../components/Header'
import { ListGroup, Button, Row, Container } from 'react-bootstrap'
import { getSales,deleteSale } from '../../../functions/integrations'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useState, useRef } from "react";

const ListSales = () => {    
    const [sales, setSales] = useState([])

    const loadSales = async () => {
        await getSales()
            .then(result => {   
                console.log(result.data)
                setSales(result.data)
                return result.data;
            })
            .catch(error => {
                console.log(error)
                return [];
            })
    }

    const useComponentWillMount = (func) => {
        const willMount = useRef(true)

        if (willMount.current) func()

        willMount.current = false
    }

    const deleteSaleClick = async (id) => {
        await deleteSale(id).then(data => {
            Swal.fire({
                title: 'Sucesso',
                text: 'venda deletada com sucesso',
                icon: 'success',
                timer: 1500
            })
        })
        loadSales()
    }

    useComponentWillMount(loadSales)

    return (
        <div>
            <Header />
            <h1 style={{ textAlign: "center" }}>Todos as vendas</h1>
            <Container >
                <Row>
                    <ListGroup style={{ width: "100%", padding: "20px" }}>
                        {sales.map(sale => (
                            <ListGroup.Item style={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span>Id da Venda: {sale.id}</span>
                                    <span>Valor da Venda: R${sale.value}</span>
                                    <span>Valor da Comissão: R${sale.comission}</span>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Link to={`/editar-venda/${sale.id}`}><Button variant="primary" style={{ marginLeft: 10 }}>Editar</Button></Link>
                                    <Button variant="danger" style={{ marginLeft: 10 }} onClick={() => deleteSaleClick(sale.id)}>Excluir</Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Row>
            </Container>

        </div>
    )
}

export default ListSales