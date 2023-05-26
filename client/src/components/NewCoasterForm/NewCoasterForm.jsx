import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import coastersService from "../../services/coasters.services"

const NewCoasterForm = ({ closeModal, updateList }) => {

    const [coasterData, setCoasterData] = useState({
        title: '',
        description: '',
        length: '',
        inversions: '',
        imageUrl: ''
    })

    const handleInputChange = event => {
        const { name, value } = event.target
        setCoasterData({ ...coasterData, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        coastersService
            .saveCoaster(coasterData)
            .then(() => {
                closeModal()
                updateList()
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={coasterData.title} onChange={handleInputChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={coasterData.description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="inversions">
                        <Form.Label>Inversiones</Form.Label>
                        <Form.Control type="text" value={coasterData.inversions} onChange={handleInputChange} name="inversions" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="length">
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="text" value={coasterData.length} onChange={handleInputChange} name="length" />
                    </Form.Group>

                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="imageUrl">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" value={coasterData.imageUrl} onChange={handleInputChange} name="imageUrl" />
                    </Form.Group>
                </Col>

            </Row>

            <div className="d-grid mt-3">
                <Button variant="dark" type="submit">Crear montaña rusa</Button>
            </div>
        </Form>
    )
}

export default NewCoasterForm