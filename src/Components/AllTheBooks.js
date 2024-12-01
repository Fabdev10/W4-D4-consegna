import {Row, Container, Col }from 'react-bootstrap';
import FantasyList from '../data/fantasy.json';
import CommentArea from './CommentArea';
import SingleBook from "./SingleBook";
import { useState} from 'react';


function AllTheBooks({ searchQuery}) {
  const [selected, setSelected] = useState(false)
    return(
      <Container>
      <Row>
      <Col md={9}>
        <Row className="g-3 mt-3">
          {FantasyList
            .filter((b) => b.title.toLowerCase().includes(searchQuery))
            .map((book) => {
              return (
                <Col xs={12} md={4} key={book.asin}>
                  <SingleBook
                    book={book}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Col>
              )
            })}
        </Row>
      </Col>
      <Col md={3}>
        <CommentArea asin={selected}/>
      </Col>
    </Row>
    </Container> )}
export default AllTheBooks