import { useParams, Link } from 'react-router-dom';
import * as model from '../model';
import { ButtonDelete } from './button-delete';

export type CommentFooterProps = Pick<
  model.types.Comment,
  'author' | 'createdAt' | 'id'
>;

export const Footer = ({ author, createdAt, id }: CommentFooterProps) => {
  const { slug } = useParams<{ slug: string }>();

  const handleDeleteComment = () => {
    model.commentDeleted({ slug, id });
  };

  return (
    <div className="card-footer">
      <Link className="comment-author" to={`/@${author.username}`}>
        <img
          alt={author.username}
          className="comment-author-img"
          src={author.image}
        />
      </Link>
      &nbsp;
      <Link className="comment-author" to={`/@${author.username}`}>
        {author.username}
      </Link>
      <span className="date-posted">{new Date(createdAt).toDateString()}</span>
      <ButtonDelete author={author} onClick={handleDeleteComment} />
    </div>
  );
};
