import { createEvent, restore } from 'effector';
import type { Location } from 'history';
import history from 'history/browser';

// For example, synchronize history with Effector store through uni-directional flow (i.e. history -> store -> component

const locationUpdated = createEvent<Location>();

export const $location = restore(locationUpdated, history.location);
export const $locationPathname = $location.map(({ pathname }) => pathname);
export const $locationSearch = $location.map(({ search }) => search);

history.listen(({ location }) => {
  locationUpdated(location);
});
