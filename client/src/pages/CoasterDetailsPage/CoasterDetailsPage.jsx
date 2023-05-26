import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import coastersService from "../../services/coasters.services"
import { Row, Col, Container, Button } from "react-bootstrap"
import Loader from "../../components/Loader/Loader"


const CoasterDetailsPage = () => {

    const { coaster_id } = useParams()

    const [coaster, setCoaster] = useState()

    useEffect(() => {
        loadCoaster()
    }, [])

    const loadCoaster = () => {
        coastersService
            .getOneCoaster(coaster_id)
            .then(({ data }) => setCoaster(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            {
                !coaster
                    ?
                    <Loader />
                    :
                    <>
                        <h1>Detalles de {coaster.title}</h1>
                        <hr />

                        <Row>

                            <Col md={{ span: 6 }}>
                                <h3>Especificaciones</h3>
                                <p>{coaster.description}</p>
                                <ul>
                                    <li>Longitud: {coaster.length}</li>
                                    <li>Inversiones: {coaster.inversions}</li>
                                </ul>
                                <hr />

                                <Link to="/galeria">
                                    <Button variant="dark">Volver a la galería</Button>
                                </Link>

                            </Col>

                            <Col md={{ span: 4 }}>
                                <img src={coaster.imageUrl} style={{ width: '100%' }} />
                            </Col>

                        </Row>
                    </>
            }

        </Container>
    )
}

export default CoasterDetailsPage