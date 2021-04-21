import Header from '../../../components/Header'
import { useFormik } from 'formik'
import { Form, Button } from 'react-bootstrap'
import { insertSale } from '../../../functions/integrations'
import Swal from 'sweetalert2'

const AddSale = () => {
    const forms = useFormik({
        initialValues: {
            id: "",
            value: "",
        },
        onSubmit: async values => {
            await insertSale(values.id, values.value).
                then(data => {
                    Swal.fire({
                        title: 'Sucesso',
                        text: 'vendedor cadastrado com sucesso',
                        icon: 'success',
                        timer: 1500
                    })
                    values.id = "";
                    values.value = "";
                })
        }
    })

    return (
        <div>
            <Header />
            <section style={
                {
                    position: "absolute",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    left: "50%",
                    marginLeft: "-35%",
                    top: "50%",
                    width: "70%"
                }
            } >
                <h1>Adicionar Venda</h1>
                <form onSubmit={forms.handleSubmit}>
                    <Form.Group controlId="saleName">
                        <Form.Label>Id do Vendedor</Form.Label>
                        <Form.Control id="id" name="id" type="number" placeholder="Digite o id do vendedor" value={forms.values.id} onChange={forms.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="saleEmail">
                        <Form.Label>Valor da venda</Form.Label>
                        <Form.Control id="value" name="value" type="number" placeholder="Digite o valor da compra" value={forms.values.value} onChange={forms.handleChange} />
                    </Form.Group>

                    <Button type="submit">Adicionar</Button>
                </form>
            </section>
        </div>
    )
}

export default AddSale;