import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as article from '@/entities/article';
import { Pagination } from '@/shared/ui';
import * as model from './model';

type Props = Readonly<{
  pageSize?: number;
}>;

const YourFeedPage = ({ pageSize = 10 }: Props) => {
  const feed = useFeed(pageSize);

  return (
    <>
      <article.Feed
        articlesStore={model.$articles}
        isEmpty={feed.isEmpty}
        loading={feed.loading}
        onFavoriteToggle={model.favoriteArticleToggled}
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
      pageSize,
      page: pageQuery,
    });
  }, [pageQuery, pageSize]);

  const handlePageChange = (page: number) => {
    setSearchParams({
      page: String(page),
    });
  };

  return {
    page: pageQuery,
    loading,
    isEmpty,
    totalPages,
    handlePageChange,
  };
}

export default YourFeedPage;
