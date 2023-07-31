import React from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';

function MapMarker({ position, text }) {
  const map = useMap();

  return position === null ? null : (
    <Marker
      position={position}
      eventHandlers={{
        click: () => {
          map.flyTo(position, 16);
        },
      }}>
      <Popup>{text}</Popup>
    </Marker>
  );
}

export default MapMarker;
