import { createEffect, sample } from 'effector';
import { createGate } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';

import { limit } from 'shared/library/limit';

export type getFeedFxArgs = Readonly<{
  pageSize: number;
  pageIndex: number;
}>;

export const getFeedFx = createEffect<getFeedFxArgs, article.types.FeedType>(
  ({ pageSize, pageIndex }) =>
    api.get(`articles?${limit(pageSize, pageIndex)}`).then((x) => x.data),
);

export const Gate = createGate();

export const {
  paginationChanged,
  favoriteArticleToggled,
  $pageSize,
  $pageIndex,
  $articles,
  selectors,
} = article.model.createFeed({
  effect: getFeedFx,
});

sample({
  source: {
    pageSize: $pageSize,
    pageIndex: $pageIndex,
  },
  clock: [Gate.open, paginationChanged],
  target: getFeedFx,
});
