import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
import FantasyList from '../data/fantasy.json'

const BookDetails = () => {
  const params = useParams()
  const b = FantasyList.find((book) => book.asin === params.asin)

  return (
    <Container className="mt-3">
    <Row >
      <Col md={8}>
        <Card >
           <Card.Title >
              {b.title}
            </Card.Title> <Card.Img variant="top" style={{ width: '100%'}} src={b.img} />
        </Card>      
        </Col>
        <Col md={4} >
        <CommentArea asin={params.asin} />
        </Col>
    </Row>
    </Container>
  )
}

export default BookDetails