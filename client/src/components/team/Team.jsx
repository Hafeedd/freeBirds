import React from 'react'
import {Col, Row, Card} from 'react-bootstrap';

const Team = () => {
  
    return (
        <Row xs={1} md={2} className="g-5 me-5 ms-5 p-5">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col className='w-50'>
              <Card className='w-50'>
                <Card.Img variant="top" className='align-self-center rounded-50' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      );
  
}

export default Team