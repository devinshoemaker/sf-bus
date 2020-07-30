import { useQuery } from 'react-query';
import { getBusLocations } from '../api/nextbus';

export function useBusLocations() {
  const intervalMs = 15000;
  return useQuery('busLocations', getBusLocations, {
    refetchInterval: intervalMs,
  });
}

export default useBusLocations;
