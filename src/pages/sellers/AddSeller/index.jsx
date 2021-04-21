import "./style.css";
import Header from '../../../components/Header'
import {useFormik} from 'formik'
import {Form, Button} from 'react-bootstrap'
import {insertSeller} from '../../../functions/integrations'
import Swal from 'sweetalert2'

const AddSeller = () => {
    const forms = useFormik({
        initialValues:{
            name:"",
            email:"",
        },
        onSubmit:async values =>{
            await insertSeller(values.name, values.email).
            then(data => {
                Swal.fire({
                    title: 'Sucesso',
                    text: 'vendedor cadastrado com sucesso',
                    icon: 'success',
                    timer:1500
                })
                values.name = "";
                values.email = "";
            })
        }
    })
     
    return (
        <div>
            <Header/>
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
                <h1>Adicionar Vendedor</h1>
                <form onSubmit={forms.handleSubmit}>
                    <Form.Group controlId="sellerName">
                        <Form.Label>Nome do Vendedor</Form.Label>
                        <Form.Control id="name" name="name" type="name" placeholder="Escreva o seu nome" value={forms.values.name} onChange={forms.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="sellerEmail">
                        <Form.Label>Endereço de Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" placeholder="Escreva o seu email" value={forms.values.email} onChange={forms.handleChange}/>
                    </Form.Group>
                    
                    <Button type="submit">Adicionar</Button>
                </form>
            </section>
        </div>
    )
}

export default AddSeller;