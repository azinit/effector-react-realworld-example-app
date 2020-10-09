import { Domain, Event, Effect, Store, StoreValue } from 'effector';
import { Gate } from 'effector-react';
import { AxiosError } from 'axios';
import { EffectState } from 'patronum/status';

export type Author = Readonly<{
  username: string;
  bio: null | string;
  image: string;
  following: boolean;
}>;

export type Article = Readonly<{
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: readonly string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}>;

export type Feed = Readonly<{
  articles: readonly Article[];
  articlesCount: number;
}>;

export type FavoriteArticle = Readonly<{
  article: Article;
}>;

export type UnfavoriteArticle = FavoriteArticle;

export type Options = Readonly<{
  domain: Domain;
  currentPage?: number;
  pageSize?: number;
  status?: Store<EffectState>;
}>;

export type Model = Readonly<{
  Gate: Gate<unknown>;
  currentPageWasSet: Event<number>;
  favoriteToggled: Event<Article>;
  setFavoriteArticleFx: Effect<string, FavoriteArticle, AxiosError>;
  setUnfavoriteArticleFx: Effect<string, UnfavoriteArticle, Error>;
  $feed: Store<Feed>;
  $articles: Store<Feed['articles']>;
  $pageSize: Store<number>;
  $currentPage: Store<number>;
  $currentTag: Store<string>;
  $totalPages: Store<Feed['articlesCount']>;
  $isEmptyFeed: Store<boolean>;
}>;

export type CreateFeedModel = Model & {
  useModel: () => {
    pageSize: StoreValue<Model['$pageSize']>;
    currentPage: StoreValue<Model['$currentPage']>;
    currentTag: StoreValue<Model['$currentTag']>;
    totalPages: StoreValue<Model['$totalPages']>;
    isEmptyFeed: StoreValue<Model['$isEmptyFeed']>;
  };
};