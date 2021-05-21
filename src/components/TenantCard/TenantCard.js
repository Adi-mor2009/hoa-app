import { Button, Card, Col, Row } from "react-bootstrap";
import './TenantCard.css';
import image from '../../asserts/windowman.png';

function TenantCard({tenant}){
    debugger
    return(
        <div className="c-tenant-card">
            <Card>
                <Row className='no-gutters'>
                    <Col className="col-md-4 c-tenant-img">
                        {!tenant.img && <Card.Img variant="top" src={image} />}
                        {tenant.img && <Card.Img variant="top" src={tenant.img} />}
                    </Col>
                    <Col className="col-md-8 c-tenant-info">
                        <Card.Body>
                            <Card.Title>Name: {tenant.name}</Card.Title>
                            <Card.Text>Email {tenant.email}</Card.Text>
                            <Card.Text>
                                Apartement: {tenant.apartement}
                            </Card.Text>
                            {/* <div className="tenant-card-bottons">
                                <Button variant="light"><i className="bi bi-pencil" style={{color: 'lightskyblue'}}></i></Button>
                                <Button variant="light"><i className="bi bi-trash" style={{color: 'red'}}></i></Button>
                            </div> */}
                        </Card.Body>
                    </Col>
                </Row>    
            </Card>
        </div>
    )
}

export default TenantCard;