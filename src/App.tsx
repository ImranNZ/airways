import { Card, Container } from "react-bootstrap";
import { CoordinateForm } from "./Components/coordinate-form/coordinate-form.component";

function App() {
    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <h1 className="header">
                    Airways Technical Exercise{" "}
                    <span className="h6 text-muted">By Imran Dole</span>
                </h1>
            </Container>
            <Card className="p-5 mb-4 bg-light rounded-3">
                <Card.Body>
                    <Card.Title>Point Comparison</Card.Title>
                    <Card.Text>
                        In the input box below, fill in the points that you
                        would like to be analyzed. The points must be separated
                        by a space and the coordinates must be separated by a
                        comma, e.g. <kbd>0,0 1,-3 8,7</kbd>
                    </Card.Text>
                    <CoordinateForm></CoordinateForm>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default App;
