import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }))
  }, [asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM5ZDY5ZGM0OWYzOTAwMTU2ZDI5MDciLCJpYXQiOjE3MzE4NDM3NDEsImV4cCI6MTczMzA1MzM0MX0.KkJK6gxcrUsZ5LbxxQTudpM5Zw3vYlZsxJY8PAtAmN4'
          },
        }
      )
      if (response.ok) {
        alert('Review submitted!')
        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        })
      } else {
        throw new Error('Something was wrong!Try again')
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="my-4">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-3">
          <Form.Label>Reviews</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insert your comment"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rate from 1 to 5</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          SUBMIT
        </Button>
      </Form>
    </div>
  )
}
export default AddComment
