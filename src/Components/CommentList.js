import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ renderComments }) => (
  
  <ListGroup style={{ color: 'black' }} className="mt-4">
      <ListGroup.Item disabled>You have to be registered to see all the comments and ratings.</ListGroup.Item>
    {renderComments.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
)

export default CommentList
