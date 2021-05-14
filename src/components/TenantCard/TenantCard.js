import { Card, Col, Row } from "react-bootstrap";
import './TenantCard.css';
import image from '../../asserts/man.png';

function TenantCard({tenant}){
    return(
        <div className="c-tenant-card">
            <Card>
                <Row className='no-gutters'>
                    <Col className="col-md-4">
                        <Card.Img variant="top" src={image} />
                    </Col>
                    <Col className="col-md-8">
                        <Card.Body>
                            <Card.Title>Name: {tenant.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Email {tenant.email}</Card.Subtitle>
                            <Card.Text>
                                Apartement: {tenant.apartement}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>    
            </Card>
        </div>
    )
}

export default TenantCard;