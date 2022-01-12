import { createEvent, restore } from 'effector';
import type { Update } from 'history';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({ window });

// For example, synchronize history with Effector store through uni-directional flow (i.e. history -> store -> component

export const historyUpdated = createEvent<Update>();

const $history = restore(historyUpdated, history);
export const $location = $history.map(({ location }) => location);
export const $locationPathname = $location.map(({ pathname }) => pathname);
export const $locationSearch = $location.map(({ search }) => search);
