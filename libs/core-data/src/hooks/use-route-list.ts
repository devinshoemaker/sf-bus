import { useQuery } from 'react-query';
import { getRouteList } from '../api/nextbus';

export function useRouteList() {
  return useQuery('routeList', getRouteList);
}

export default useRouteList;
