import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './HomePage.css';
import image1 from '../../asserts/messages.jpg';
import image2 from '../../asserts/issue.jpg';
import image3 from '../../asserts/vote.jpg';

function HomePage(props) {
    return (
        <Container fluid className="p-home">
            <div className="p-home-bg-img">
                <h1>HOA System</h1>
                <p>Manage your house!</p>
                {/* <div className="temp">

                </div> */}
            </div>
            <div className="p-home-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
}

export default HomePage;