'use client';

import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

export default function Coverage() {
  // Coordenadas de Wallingford, CT
  const center = { lat: 41.4576, lng: -72.8231 };

  return (
    <div className="bg-blue-700 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Standard coverage within 45 minutes of Wallingford, CT
      </h1>
      <p className="text-center text-white mb-8">
        Outside this area an over-fee may apply.
      </p>

      <div className="max-w-4xl mx-auto h-[500px]">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={9}
          >
            <Circle
              center={center}
              radius={50000} // ~31.07 millas en metros
              options={{
                strokeColor: '#00ff00',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#00ff00',
                fillOpacity: 0.2,
              }}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
