import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const SingleBook = ({ setSelected, selected, book }) => {
  const navigate = useNavigate()

  return (
    <>
      <Card
        onClick={() => setSelected(book.asin)}
        style={{
          border: selected === book.asin ? '3px solid red' : 'none',
        }}
      >
        <Card.Img style={{height: "400px"} } variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ height: "70px"  }}>{book.title}</Card.Title>
          <Button
            className="w-100 mt-2"
            onClick={() => navigate(`/details/${book.asin}`)}
          >
            DETAILS
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook