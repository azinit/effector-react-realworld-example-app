import { Link, ROUTES } from '@/shared/library/router';

type Props = Readonly<{
  title: string;
}>;

export const Logo = ({ title }: Props) => (
  <Link className="navbar-brand" to={ROUTES.root}>
    {title.toLowerCase()}
  </Link>
);
