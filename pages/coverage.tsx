'use client';

import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

export default function Coverage() {
  // Center: Wallingford, CT
  const center = { lat: 41.4576, lng: -72.8231 };

  // Experimento 1: Wallingford -> Fairfield (aprox). (ajustable)
  const radiusMeters = 30000; // 30 km ≈ 18.7 miles

  const circleOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
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
