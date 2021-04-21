import Header from '../../../components/Header'
import { ListGroup, Button, Row, Container, Form } from 'react-bootstrap'
import { getSaleById, editSale } from '../../../functions/integrations'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import  Swal  from 'sweetalert2'
import { useFormik } from 'formik'

const EditSale = () => {
    const { id } = useParams();
    const [sale, setSale] = useState({})

    const loadSale = async () => {
        await getSaleById(id)
            .then(result => {
                console.log(result.data)
                setSale(result.data)
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

    useComponentWillMount(loadSale)

    const forms = useFormik({
        initialValues: {
            sellerId: sale.seller_id,
            value: sale.value,
        },

        onSubmit: ({sellerId, value }) => {
            editSale(id, ['seller_id', 'value'], [sellerId, value]).then(data => {
                Swal.fire({
                    title: 'Sucesso',
                    text: 'vendedor atualizado com sucesso',
                    icon: 'success',
                    timer: 1500
                })
            }).catch(error => {
                Swal.fire({
                    title: 'Erro',
                    text: 'erro na edição do vendedor' + error,
                    icon: 'error',
                    timer: 1500
                })
            })
        }

    })

    return (
        <div>
            <Header />
            <h1>Editar Usuário</h1>
            <Container>
                <Row>
                    <form onSubmit={forms.handleSubmit} style={{ width: "100%" }}>
                        <Form.Group controlId="saleId">
                            <Form.Label>Id do Vendedor</Form.Label>
                            <Form.Control id="sellerId" name="sellerId" type="number" placeholder={sale.seller_id} value={forms.values.sellerId} onChange={forms.handleChange} disabled />
                        </Form.Group>
                        <Form.Group controlId="saleValue">
                            <Form.Label>Valor da Venda</Form.Label>
                            <Form.Control id="value" name="value" type="number" placeholder={sale.value} value={forms.values.value} onChange={forms.handleChange} />
                        </Form.Group>
                        <Button type="submit">Salvar</Button>
                    </form>
                </Row>
            </Container>

        </div>
    )
}


export default EditSale