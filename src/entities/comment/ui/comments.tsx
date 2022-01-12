import { AddCommentForm } from './add-comment';
import { CommentsList } from './comment-list';
import { Error } from './error';

export const Comments = () => {
  return (
    <>
      <Error />
      <AddCommentForm />
      <CommentsList />
    </>
  );
};
