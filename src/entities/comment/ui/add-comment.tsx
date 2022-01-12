import { useEffect } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import * as visitor from '@/entities/visitor';
import { useParams } from '@/shared/library/router';
import { Form } from '@/shared/ui';
import * as model from '../model';
import { Footer } from './footer';

export function AddCommentForm() {
  const isAuth = visitor.selectors.useAuth();
  const { handleSubmit, register } = useForm();

  return isAuth ? (
    <Form className="card comment-form" onSubmit={handleSubmit}>
      <div className="card-block">
        <Form.Control
          as="textarea"
          placeholder="Write a comment..."
          rows={3}
          {...register('body')}
        />
      </div>
      <Footer />
    </Form>
  ) : null;
}

type FormInputs = {
  body: string;
};

function useForm() {
  const defaultValues = {
    body: '',
  };

  const { slug } = useParams<{ slug: string }>();
  const { handleSubmit, register, reset } = useReactHookForm<FormInputs>({
    defaultValues,
  });

  useEffect(() => {
    const unwatch = model.addCommentFx.done.watch(() => {
      reset(defaultValues);
    });

    return () => unwatch();
  });

  return {
    register,
    handleSubmit: handleSubmit(({ body }: FormInputs) => {
      if (slug) {
        model.addCommentFx({ body, slug });
      }
    }),
  };
}
