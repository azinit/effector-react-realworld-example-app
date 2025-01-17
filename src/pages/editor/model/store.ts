import { createEvent, createEffect, restore, forward } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from '@/entities/article';
import { history } from '@/shared/history';
import * as api from './api';

export const formSubmitted = createEvent();

export const tagDeleted = createEvent<string>();
export const createArticleFx = createEffect<
  article.types.Article,
  article.types.Article,
  Record<string, unknown>
>(api.createArticle);

export const getArticleFx = createEffect(api.getArticle);
export const updateArticleFx = createEffect(api.updateArticle);

export const redirectToArticleIdFx = createEffect(
  ({ slug }: article.types.Article) => {
    history.replace(`/article/${slug}`);
  },
);

forward({
  from: [updateArticleFx.doneData, createArticleFx.doneData],
  to: redirectToArticleIdFx,
});

export const Gate = createGate();
export const $error = restore(createArticleFx.failData, {
  errors: {},
}).reset(Gate.close);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useCreateArticlePending: () => useStore(createArticleFx.pending),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
