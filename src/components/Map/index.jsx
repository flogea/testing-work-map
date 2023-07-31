import React from 'react';
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet';
import { useSelector } from 'react-redux';

import './index.scss';
import { selectRoute } from '../../redux/router/routerSlice';
import { AutoFitBound, Marker } from '..';

function Map() {
  const position = [59.938951, 30.315635];
  const route = useSelector(selectRoute);
  const [points, setPoints] = React.useState([]);
  const [originMarker, setOriginMarker] = React.useState(null);
  const [middleMarker, setMiddleMarker] = React.useState(null);
  const [destinationMarker, setDestinationMarker] = React.useState(null);
  const [bounds, setBounds] = React.useState([]);

  React.useEffect(() => {
    if (route) {
      const points = route.routes[0].geometry.coordinates.map((arr) => [arr[1], arr[0]]);
      setPoints(points);
      const markers = route.waypoints;
      const originPoint = { lat: markers[0].location[1], lng: markers[0].location[0] };
      const middlePoint = { lat: markers[1].location[1], lng: markers[1].location[0] };
      const destinationPoint = {
        lat: markers[2].location[1],
        lng: markers[2].location[0],
      };

      setOriginMarker(originPoint);
      setMiddleMarker(middlePoint);
      setDestinationMarker(destinationPoint);

      const newBounds = [originPoint, middlePoint, destinationPoint].map((m) => [m.lat, m.lng]);
      setBounds(newBounds);
    }
  }, [route]);

  const handleSetBounds = (bounds) => {
    setBounds(bounds);
  };

  return (
    <div className="map">
      <MapContainer center={position} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Polyline color={'blue'} opacity={0.5} weight={5} positions={points}>
          <Popup>Путь</Popup>
        </Polyline>

        {originMarker && <Marker position={originMarker} text="Начальная точка" />}
        {middleMarker && <Marker position={middleMarker} text="Серединная точка" />}
        {destinationMarker && <Marker position={destinationMarker} text="Конечная точка" />}

        <AutoFitBound bounds={bounds} handleSetBounds={handleSetBounds} />
      </MapContainer>
    </div>
  );
}

export default Map;
