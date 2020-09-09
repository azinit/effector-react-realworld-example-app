import React from 'react';
import RcPagination, { PaginationProps } from 'rc-pagination';
// @ts-ignore
import locale from 'rc-pagination/lib/locale/en_US';

export const Pagination: React.FC<Readonly<Omit<PaginationProps, 'locale'>>> = (
  props,
) => <RcPagination locale={locale} {...props} />;
