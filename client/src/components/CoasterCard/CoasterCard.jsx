import { Card, Button } from "react-bootstrap"

import './CoasterCard.css'
import { Link } from "react-router-dom"

const CoasterCard = ({ title, imageUrl, _id }) => {

    return (
        <Card className="mb-3 CoasterCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className="d-grid">
                    <Link to={`/detalles/${_id}`} className="btn btn-dark btn-sm">Detalles</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CoasterCard