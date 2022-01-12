import { createEvent, restore } from 'effector';
import type { Location } from 'history';
import { createHashHistory } from 'history';

export const history = createHashHistory();

// For example, synchronize history with Effector store through uni-directional flow (i.e. history -> store -> component

export const locationUpdated = createEvent<Location>();

export const $location = restore(locationUpdated, history.location);
export const $locationPathname = $location.map(({ pathname }) => pathname);
export const $locationSearch = $location.map(({ search }) => search);
