import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './HomePage.css';
import { useMediaQuery } from 'react-responsive'
import image1 from '../../asserts/home_mobile.jpg';
import image2 from '../../asserts/tenants_mobile.jpg';
import image3 from '../../asserts/messages_mobile.jpg';
import image4 from '../../asserts/issue_mobile.jpg';
import image5 from '../../asserts/vote_mobile.jpg';
import image6 from '../../asserts/home_desktop.jpg';
import image7 from '../../asserts/tenants.jpg';
import image8 from '../../asserts/messages.jpg';
import image9 from '../../asserts/issue.jpg';
import image10 from '../../asserts/vote.jpg';

function HomePage(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
    //const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
      })
    return (
        <Container fluid className="p-home">
            {/* <div className="p-home-bg-img">
                <h1>HOA System</h1>
                <h4>Homeowner Association Management System</h4> 
                <p>Managing your building!</p>
            </div> */}
            <div className="p-home-carousel">
                <Carousel>
                    <Carousel.Item className="carousel-first-item" key={1}>
                        {isTabletOrMobileDevice && <img
                            // className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />}
                        {isDesktopOrLaptop && <img
                            // className="d-block w-100"
                            src={image6}
                            alt="First slide"
                        />}
                        <Carousel.Caption>
                            <h3>HOA System</h3>
                            <p>Homeowners Association Management System - Everything you need to manage your building</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-second-item" interval={5000} key={2}>
                        {isTabletOrMobileDevice && <img
                            // className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />}
                        {isDesktopOrLaptop && <img
                            // className="d-block w-100"
                            src={image7}
                            alt="Second slide"
                        />}

                        <Carousel.Caption>
                            <h3>Manage tenant members</h3>
                            <p>Add, remove and view tenants from the building account</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-third-item" interval={5000} key={3}>
                        {isTabletOrMobileDevice && <img
                            // className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />}
                        {isDesktopOrLaptop && <img
                            // className="d-block w-100"
                            src={image8}
                            alt="Second slide"
                        />}

                        <Carousel.Caption>
                            <h3>Manage your messaging system</h3>
                            <p>The committee owner can post notices to tenants with priority. Tenants can view, filter, add comments and get an indication of unread messages</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-forth-item" interval={5000} key={4}>
                        {isTabletOrMobileDevice && <img
                            // className="d-block w-100"
                            src={image4}
                            alt="Third slide"
                        />}
                        {isDesktopOrLaptop && <img
                            // className="d-block w-100"
                            src={image9}
                            alt="Second slide"
                        />}
                        <Carousel.Caption className="carousel-fifth-item" interval={5000} key={5}>
                            <h3>Management of issues in the building</h3>
                            <p>Tenants can report various issues with priorities</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {isTabletOrMobileDevice && <img
                            // className="d-block w-100"
                            src={image5}
                            alt="Third slide"
                        />}
                        {isDesktopOrLaptop && <img
                            // className="d-block w-100"
                            src={image10}
                            alt="Second slide"
                        />}

                        <Carousel.Caption className="carousel-six-item" interval={5000} key={6}>
                            <h3>Voting system management</h3>
                            <p>The committee owner can conduct votes by creating, tracking and publishing results. Tenants can see active votes and participate, tenants get a clear indication of a vote they did not vote, tenants can see the results</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
}

export default HomePage;