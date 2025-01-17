import { Button } from '@/shared/ui';
import { types } from '../../model';
import './index.css';

type Props = Readonly<
  Pick<types.Article, 'slug' | 'favorited' | 'favoritesCount'> & {
    onClick: (payload: types.SelectedArticle) => void;
    children: React.ReactNode;
  }
>;

export const ButtonFavorite = ({
  slug,
  favorited,
  favoritesCount,
  onClick,
  children,
}: Props) => {
  const handleClick = () => {
    onClick({ slug, favorited, favoritesCount });
  };

  return (
    <Button
      className="button-favorite btn-outline-primary"
      data-active={favorited}
      size="sm"
      onClick={handleClick}
    >
      <i className="ion-heart" /> {children}
    </Button>
  );
};
