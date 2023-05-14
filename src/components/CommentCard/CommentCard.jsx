// npm modules
import { Link } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

// css
import styles from './CommentCard.module.css'

const CommentCard = ({comment, articleId, user, handleDeleteComment}) => {
  return (
    <article>
      <header>
        <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <>
              <Link to={`/articles/${articleId}/comments/${comment._id}`} state={comment}>
                Edit
              </Link>
              <button onClick={()=> handleDeleteComment(articleId, comment._id)}>Delete</button>
            </>
          }
        </span>
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard