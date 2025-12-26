'use client';

import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

export default function Coverage() {
  const [mapKey, setMapKey] = useState(Date.now());

  // Centro: Wallingford, CT
  const center = { lat: 41.4576, lng: -72.8231 };

  // Radio de prueba (30 km)
  const radiusMeters = 30000;

  const circleOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.2,
  };

  // Forzar remount del mapa
  const reloadMap = () => {
    setMapKey(Date.now());
  };

  useEffect(() => {
    console.log('Radio actual:', radiusMeters, 'metros');
    console.log(
      'Radio en millas:',
      (radiusMeters / 1609.34).toFixed(1),
      'millas'
    );
  }, [radiusMeters]);

  return (
    <div>
      {/* PANEL DEBUG — esto DEBE verse sí o sí */}
      <div
        style={{
          background: '#e0f7fa',
          padding: '15px',
          marginBottom: '15px',
          borderRadius: '5px',
        }}
      >
        <h3>Debug Info</h3>
        <p>
          <strong>Radio:</strong> {radiusMeters} metros (
          {Math.round(radiusMeters / 1609.34)} millas)
        </p>
        <p>
          <strong>Centro:</strong> Lat: {center.lat}, Lng: {center.lng}
        </p>
        <button
          onClick={reloadMap}
          style={{
            padding: '8px 16px',
            background: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Forzar recarga del mapa
        </button>
      </div>

      <LoadScript
        googleMapsApiKey={
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
        }
      >
        <GoogleMap
          key={mapKey}
          mapContainerStyle={{ width: '100%', height: '500px' }}
          center={center}
          zoom={10}
          options={{
            disableDefaultUI: false,
            zoomControl: true,
          }}
        >
          <Circle
            center={center}
            radius={radiusMeters}
            options={circleOptions}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
