import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './HomePage.css';
import image1 from '../../asserts/three.jpg';
import image2 from '../../asserts/login.jpg';
import image3 from '../../asserts/messages.jpg';
import image4 from '../../asserts/issue.jpg';
import image5 from '../../asserts/vote.jpg';
import image6 from '../../asserts/tenants.jpg';

function HomePage(props) {
    return (
        <Container fluid className="p-home">
            {/* <div className="p-home-bg-img">
                <h1>HOA System</h1>
                <h4>Homeowner Association Management System</h4> 
                <p>Managing your building!</p>
            </div> */}
            <div className="p-home-carousel">
                <Carousel>
                    <Carousel.Item className="carousel-first-item">
                        <img
                            // className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>HOA System</h3>
                            <p>Homeowner Association Management System - All you need for managing your building</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-second-item">
                        <img
                            // className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Manage tenants members</h3>
                            <p>Add, remove and view tenants from the building account</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-third-item">
                        <img
                            // className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Manage message system</h3>
                            <p>Committe owner can post messages to tenants. Tenants can view, filter ...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-forth-item">
                        <img
                            // className="d-block w-100"
                            src={image4}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="carousel-fifth-item">
                            <h3>Manage building issues</h3>
                            <p>Tenants can report issues with priorty ...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            src={image5}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Manage voting system</h3>
                            <p>Committe owner can manage votes, tenats can participate and more</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
}

export default HomePage;