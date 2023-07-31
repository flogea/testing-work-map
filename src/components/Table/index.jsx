import React from 'react';
import { useDispatch } from 'react-redux';

import coords from '../../coords.json';

import './index.scss';
import { routerActions } from '../../redux/router/routerSlice';

function RouteTable() {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const dispatch = useDispatch();

  const routes = {
    route1: 'Route1',
    route2: 'Route2',
    route3: 'Route3',
  };

  const handleClickRoute = (e) => {
    const nameOfRoute = e.target.getAttribute('name');
    dispatch(routerActions.fetchRoute(coords[nameOfRoute]));
    setSelectedRow(nameOfRoute);
  };

  return (
    <div>
      <table className="iksweb">
        <thead>
          <tr>
            <td>Маршрут</td>
            <td>Точка 1 (lat, long)</td>
            <td>Точка 2 (lat, long)</td>
            <td>Точка 3 (lat, long)</td>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={handleClickRoute}
            name={routes.route1}
            className={selectedRow === routes.route1 ? 'active' : ''}>
            <td name={routes.route1}>Машрут №1</td>
            <td name={routes.route1}>
              {coords.Route1.point1.lat}, {coords.Route1.point1.long}
            </td>
            <td name={routes.route1}>
              {coords.Route1.point2.lat}, {coords.Route1.point2.long}
            </td>
            <td name={routes.route1}>
              {coords.Route1.point3.lat}, {coords.Route1.point3.long}
            </td>
          </tr>
          <tr
            onClick={handleClickRoute}
            name={routes.route2}
            className={selectedRow === routes.route2 ? 'active' : ''}>
            <td name={routes.route2}>Машрут №2</td>
            <td name={routes.route2}>
              {coords.Route2.point1.lat}, {coords.Route2.point1.long}
            </td>
            <td name={routes.route2}>
              {coords.Route2.point2.lat}, {coords.Route2.point2.long}
            </td>
            <td name={routes.route2}>
              {coords.Route2.point3.lat}, {coords.Route2.point3.long}
            </td>
          </tr>
          <tr
            onClick={handleClickRoute}
            name={routes.route3}
            className={selectedRow === routes.route3 ? 'active' : ''}>
            <td name={routes.route3}>Машрут №3</td>
            <td name={routes.route3}>
              {coords.Route3.point1.lat}, {coords.Route3.point1.long}
            </td>
            <td name={routes.route3}>
              {coords.Route3.point2.lat}, {coords.Route3.point2.long}
            </td>
            <td name={routes.route3}>
              {coords.Route3.point3.lat}, {coords.Route3.point3.long}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RouteTable;
