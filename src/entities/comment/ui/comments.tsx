import * as visitor from '@/entities/visitor';
import { AddCommentForm } from './add-comment';
import { CommentsList } from './comment-list';
import { Error } from './error';

export const Comments = () => {
  const isAuth = visitor.selectors.useIsAuthorized();

  return isAuth ? (
    <>
      <Error />
      <AddCommentForm />
      <CommentsList />
    </>
  ) : null;
};
