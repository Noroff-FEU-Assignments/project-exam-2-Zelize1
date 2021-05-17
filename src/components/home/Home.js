import Carousel from 'react-bootstrap/Carousel'
import "../../sass/style.scss";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Home() {
    return (    
            <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="carousel1.jpg" alt="First slide"/>
                    <Carousel.Caption>
                        <h3 className="carousel-text">VELKOMMEN TIL SOLHJERTER</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="carousel2.jpg" alt="Second slide"/>

                    <Carousel.Caption>
                        <h3 className="carousel-text">YOGA, REHABILITERING OG GLEDE</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="carousel3.jpg" alt="Third slide"/>

                    <Carousel.Caption>
                        <h3 className="carousel-text">MELD DEG PÅ NÅ!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h2>Rehabiliterende yoga i vakker nord-norsk natur</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean dignissim arcu at malesuada aliquet. 
Etiam in velit vitae est consequat dictum in eu ex. 
Nunc sagittis ultricies nulla. Donec ac magna lorem. 
Nulla sit amet vehicula magna, nec euismod nunc. 
Duis ultrices tempor metus sit amet mollis. 
Suspendisse neque ante, iaculis vel libero vel, efficitur interdum ex. 
Morbi congue maximus nulla, ac sodales eros feugiat et. 
</p>

            <Button variant="primary" size="lg" block>
                Sjekk ut kursoversikten!
            </Button>

            <Card className="text-center">

                <Card.Body>
                    <Card.Title>Tittel - Blog post</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean dignissim arcu at malesuada aliquet. 
Etiam in velit vitae est consequat dictum in eu ex. 
Nunc sagittis ultricies nulla. Donec ac magna lorem. 
Nulla sit amet vehicula magna, nec euismod nunc. 
Duis ultrices tempor metus sit amet mollis. 
Suspendisse neque ante, iaculis vel libero vel, efficitur interdum ex. 
Morbi congue maximus nulla, ac sodales eros feugiat et. 
Vivamus a aliquet elit. Suspendisse faucibus enim in convallis sagittis. 
Proin quis arcu at enim viverra commodo quis vitae velit. In in fringilla enim.                                                                                         Morbi vel ligula lacinia, ultricies velit id, hendrerit arcu. 
Vestibulum elit diam, elementum ut libero nec, gravida semper sapien. 
Donec nec risus sem. 
Pellentesque at magna et turpis imperdiet posuere non vitae nibh.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            </>

        
    )
}
