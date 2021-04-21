import "./style.css";
import Header from '../../../components/Header'
import { ListGroup, Button, Row, Container, Form } from 'react-bootstrap'
import { getSellerById, getSellers, editSeller } from '../../../functions/integrations'
import {useEffect, useState, useRef} from 'react'
import {useParams} from 'react-router-dom'
import {Swal} from 'sweetalert2'
import {useFormik} from 'formik'

const EditSeller = () => {
    const {id} = useParams();
    const [seller,setSeller] = useState({})

    const loadSeller = async () => {
        await getSellerById(id)
            .then(result => {
                console.log(result.data)
                setSeller(result.data)
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

    useComponentWillMount(loadSeller)

    const forms = useFormik({
        initialValues:{
            name:seller.name,
            email:seller.email,
            id:seller.id,
            createdAt:seller.createdAt,
            updatedAt:seller.updatedAt
        },

        onSubmit:({email,name}) => {
            editSeller(id,['email','name'],[email,name]).then(data =>{
                Swal.fire({
                    title: 'Sucesso',
                    text: 'vendedor atualizado com sucesso',
                    icon: 'success',
                    timer: 1500
                })
            }).catch(error=>{
                Swal.fire({
                    title: 'Erro',
                    text: 'erro na edição do vendedor' + error,
                    icon: 'error',
                    timer: 1500
                })
            })
        }

    })

    return(
        <div>
            <Header/>
            <h1>Editar Usuário</h1>
            <Container>
                <Row>
                    <form onSubmit={forms.handleSubmit} style={{width:"100%"}}>
                        <Form.Group controlId="sellerId">
                            <Form.Label>Id do Vendedor</Form.Label>
                            <Form.Control id="sellerId" name="sellerId" type="number" placeholder={seller.id} value={forms.values.email} onChange={forms.handleChange} disabled/>
                        </Form.Group>
                        <Form.Group controlId="sellerName">
                            <Form.Label>Nome do Vendedor</Form.Label>
                            <Form.Control id="name" name="name" type="name" placeholder={seller.name} value={forms.values.name} onChange={forms.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="sellerEmail">
                            <Form.Label>Endereço de Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" placeholder={seller.email} value={forms.values.email} onChange={forms.handleChange} />
                        </Form.Group>
                        <Button type="submit">Salvar</Button>
                    </form>
                </Row>
            </Container>
            
        </div>
    )
}


export default EditSeller