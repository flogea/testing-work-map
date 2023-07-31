import axios from 'axios';

const serviceUrl = 'http://router.project-osrm.org/route/v1';

const routerApi = {
  getRoute(coords) {
    return fetch(
      `${serviceUrl}/driving/${coords.point1.long},${coords.point1.lat};${coords.point2.long},${coords.point2.lat};${coords.point3.long},${coords.point3.lat}?steps=true&geometries=geojson&overview=full`,
    ).then((res) => res.json());
  },
};

export default routerApi;
