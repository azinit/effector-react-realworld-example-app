const PROFILE = '/@:username';
const EDITOR = '/editor';

export const ROUTES = {
  basename: '/effector-react-realworld-example-app',
  root: '/',
  login: '/login',
  registration: '/registration',
  currentArticle: '/article/:slug',
  profile: {
    root: PROFILE,
    favorites: `${PROFILE}/favorites`,
  },
  globalFeed: '/global-feed',
  yourFeed: '/your-feed',
  feedByTag: '/feed-by-tag',
  settings: '/settings',
  editor: {
    root: EDITOR,
    slug: `${EDITOR}/:slug`,
  },
} as const;
