'use client';

import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

export default function Coverage() {
  // Wallingford, CT
  const center = { lat: 41.4576, lng: -72.8231 };

  // Ejemplo: 32.3 miles ≈ 52,000 meters
  const radiusMeters = 52000;

  const circleOptions = {
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#00FF00',
    fillOpacity: 0.2,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '500px' }}
        center={center}
        zoom={9}
      >
        <Circle center={center} radius={radiusMeters} options={circleOptions} />
      </GoogleMap>
    </LoadScript>
  );
}
