import {Container, Row ,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';


const Video=()=>{
    return <>
    <Container>
      <Row className='mt-3'>
        <Col sm={4}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80" />
        </Col>
        <Col sm={8}>
          <p>Lorem ipsum dolor sit amet.</p>
        </Col>
      </Row>
    </Container>
  </>
}

export default Video