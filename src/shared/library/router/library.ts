import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { locationUpdated } from './store';

export const useOnLocationChange = () => {
  const location = useLocation();

  useEffect(() => {
    locationUpdated(location);
  }, [location]);
};
