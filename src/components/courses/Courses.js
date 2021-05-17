import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export default function Courses() {
    return (
        <>
        
            <Container className="card-container">
                <Row>
                    <Col>
                        <Card className="course-card" style={
                            {width: '18rem'}
                        }>
                            <Card.Img variant="top" src="yoga1.jpg" className="course-card-img" style={{height: "13rem"}}/>
                            <Card.Body className="course-card-body">
                                <Card.Title>Kurstittel</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at malesuada metus, 
                                non finibus neque. Aliquam sit amet magna mauris. 
                                Maecenas et purus ligula. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="course-card" style={
                            {width: '18rem'}
                        }>
                            <Card.Img variant="top" src="yoga2.jpg" style={{height: "13rem"}}/>
                            <Card.Body className="course-card-body">
                                <Card.Title>Kurstittel</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at malesuada metus, 
                                non finibus neque. Aliquam sit amet magna mauris. 
                                Maecenas et purus ligula.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="course-card" style={
                            {width: '18rem'}
                        }>
                            <Card.Img variant="top" src="yoga3.jpg" style={{height: "13rem"}}/>
                            <Card.Body className="course-card-body">
                                <Card.Title>Kurstittel</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at malesuada metus, 
                                non finibus neque. Aliquam sit amet magna mauris. 
                                Maecenas et purus ligula.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
            </Container>
        
        </>
    )
}
