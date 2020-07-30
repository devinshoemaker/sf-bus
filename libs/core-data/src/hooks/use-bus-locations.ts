import axios from 'axios';
import { useQuery } from 'react-query';

const getBusLocations = async () => {
  const { data } = await axios.get(
    `http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni`
  );
  return data;
};

export function useBusLocations() {
  const intervalMs = 15000;

  return useQuery('busLocations', getBusLocations, {
    refetchInterval: intervalMs,
  });
}

export default useBusLocations;
