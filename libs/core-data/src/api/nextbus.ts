import axios from 'axios';

const url = `http://webservices.nextbus.com/service/publicJSONFeed`;
const agency = 'sf-muni';

export const getBusLocations = async () => {
  const { data } = await axios.get(
    `${url}?command=vehicleLocations&a=${agency}`
  );
  return data;
};

export const getRouteList = async () => {
  const { data } = await axios.get(`${url}?command=routeList&a=${agency}`);
  return data;
};
