import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => (
  <Container style={{height:'90vw'}} >
  <Row className="justify-content-center m-4">
    <Col xs={12} md={6}>
      <div className="text-center">
        <h1>404</h1>
        <h2>Page not found!</h2>
        <h4>The requested page was not found.</h4>
      </div>
    </Col>
  </Row>
  </Container>
)

export default NotFound
