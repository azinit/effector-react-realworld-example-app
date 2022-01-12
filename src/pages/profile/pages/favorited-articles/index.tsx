import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as article from '@/entities/article';
import { Pagination } from '@/shared/ui';
import * as profile from '../../model';
import * as model from './model';

type Props = Readonly<{
  pageSize?: number;
}>;

const FavoritedArticlesPage = ({ pageSize = 5 }: Props) => {
  const feed = useFeed(pageSize);

  return (
    <>
      <article.Feed
        articlesStore={model.$articles}
        isEmpty={feed.isEmpty}
        loading={feed.loading}
        onFavoriteToggle={feed.handleFavoriteToggle}
      />
      <Pagination
        current={feed.page}
        pageSize={pageSize}
        total={feed.totalPages}
        onPageChange={feed.handlePageChange}
      />
    </>
  );
};

function useFeed(pageSize: number) {
  const username = profile.selectors.useUserName();
  const loading = model.selectors.useGetFeedPending();
  const isEmpty = model.selectors.useIsEmptyFeed();
  const totalPages = model.selectors.useTotalPages();

  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuery = useMemo(() => {
    const result = searchParams.get('page') ?? '1';

    return Number(result);
  }, [searchParams]);

  useEffect(() => {
    model.getFeedFx({
      username,
      page: pageQuery,
      pageSize,
    });
  }, [username, pageQuery, pageSize]);

  const handlePageChange = (page: number) => {
    setSearchParams({
      page: String(page),
    });
  };

  const handleFavoriteToggle = (payload: article.types.SelectedArticle) => {
    model.favoriteArticleToggled(payload);
    model.setUnfavoriteArticleFx.done.watch(() => {
      model.getFeedFx({
        username,
        page: pageQuery,
        pageSize,
      });
    });
  };

  return {
    page: pageQuery,
    isEmpty,
    loading,
    totalPages,
    handleFavoriteToggle,
    handlePageChange,
  };
}

export default FavoritedArticlesPage;
