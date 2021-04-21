import "./style.css";
import Header from '../../../components/Header'
import { ListGroup, Button, Row,Container } from 'react-bootstrap'
import {getSellers, deleteSeller} from '../../../functions/integrations'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import { useState,useRef } from "react";

const ListSellers = () => {
    const [sellers,setSellers] = useState([])

    const loadSellers = async () => {
        await getSellers()
        .then(result => {
            console.log(result.data)
            setSellers(result.data)
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

    const deleteSellerClick = async (id) => {
        await deleteSeller(id).then(data => {
            Swal.fire({
                title: 'Sucesso',
                text: 'vendedor deletado com sucesso',
                icon: 'success',
                timer: 1500
            })
        })
        loadSellers()
    }

    useComponentWillMount(loadSellers)

    return(
        <div>
            <Header/>
            <h1 style={{textAlign:"center"}}>Todos os Vendedores</h1>
            <Container >
                <Row>
                    <ListGroup style={{width:"100%",padding:"20px"}}>
                        {sellers.map(seller => (
                            <ListGroup.Item style={{ display: 'flex',width:"100%", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{display:"flex",alignItems:"center"}}>
                                    <span style={{ marginRight: "10px"}}>{seller.id}</span>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <span>{seller.name}</span>
                                        <span>{seller.email}</span>
                                    </div>
                                </div>                                
                                <div style={{ display: "flex" }}>
                                    <Link to={`/edit-seller/${seller.id}`}><Button variant="primary" style={{ marginLeft: 10 }}>Editar</Button></Link>
                                    <Button variant="danger" style={{ marginLeft: 10 }} onClick={()=>deleteSellerClick(seller.id)}>Excluir</Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Row>
            </Container>

        </div>
    )
}

export default ListSellers;