import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as article from '@/entities/article';
import { Pagination } from '@/shared/ui';
import * as model from './model/store';

type Props = Readonly<{
  pageSize?: number;
}>;

const FeedByTagPage = ({ pageSize = 10 }: Props) => {
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
  const [searchParams, setSearchParams] = useSearchParams();
  const tagQuery = useMemo(() => searchParams.get('tag'), [searchParams]);

  const pageQuery = useMemo(() => {
    const result = searchParams.get('page') ?? '1';

    return Number(result);
  }, [searchParams]);

  const loading = model.selectors.useGetFeedPending();
  const isEmpty = model.selectors.useIsEmptyFeed();
  const totalPages = model.selectors.useTotalPages();

  useEffect(() => {
    if (tagQuery) {
      model.getFeedFx({
        page: pageQuery,
        tag: tagQuery,
        pageSize,
      });
    }
  }, [pageQuery, tagQuery, pageSize]);

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

export default FeedByTagPage;
