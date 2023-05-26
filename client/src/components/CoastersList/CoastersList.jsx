import { Col } from "react-bootstrap"
import CoasterCard from "../CoasterCard/CoasterCard"

const CoastersList = ({ coasters }) => {

    return (
        coasters.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <CoasterCard {...elm} />
                </Col>
            )
        })
    )
}

export default CoastersList