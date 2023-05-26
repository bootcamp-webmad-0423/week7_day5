import { Container } from "react-bootstrap"
import NewCoasterForm from "../../components/NewCoasterForm/NewCoasterForm"

const NewCoasterPage = () => {

    return (
        <Container>
            <h1>Nueva montaña rusa</h1>
            <hr />
            <NewCoasterForm />
        </Container>
    )
}

export default NewCoasterPage