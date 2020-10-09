import { combine } from 'effector';
import { status } from 'patronum/status';
import { request } from '../../../../../api';
import { limit } from '../../../../../library/limit';
import * as feed from '../../../../../modules/feed';
import { root } from '../../../../../root';
import * as types from './types';

export const {
  Gate,
  favoriteToggled,
  $currentPage,
  $currentTag,
  $pageSize,
  setFavoriteArticleFx,
  setUnfavoriteArticleFx,
} = feed.createFeedModel();

export const currentPageWasSet = root.createEvent<number>();

export const fetchFeedFx = root.createEffect(
  ({ tag, page }: types.GetFeedByTagArgs) =>
    request
      .get<feed.types.Feed>(
        `articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`,
      )
      .then((x) => x.data),
);

export const $status = status({ effect: fetchFeedFx });
export const $feed = root.createStore<types.Feed>({});
export const $feedByTag = combine(
  $feed,
  $currentTag,
  (feedStore, tag) =>
    feedStore[tag] ?? {
      articles: [],
      articlesCount: 0,
    },
);

export const $articles = $feedByTag.map((x) => x.articles);
export const $totalPages = $feedByTag.map((x) => x.articlesCount);

export const $isEmptyFeed = combine(
  $status,
  $articles,
  (is, articles) => is === 'done' && articles.length === 0,
);

export const $feedModel = combine({
  total: $totalPages,
  loading: fetchFeedFx.pending,
  isEmptyFeed: $isEmptyFeed,
  currentPage: $currentPage,
  pageSize: $pageSize,
  totalPages: $totalPages,
});