import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * Heritage-styled map using Stamen Toner Lite tiles with a sepia filter.
 * Uses vanilla Leaflet for full control over styling.
 */
export default function HeritageMap({
  center = [49.2835, -123.1165],
  zoom = 16,
  height = 400,
  markerLabel = 'Vancouver Block — 736 Granville Street',
  className = '',
  title = 'Map showing the location of Vancouver Block at 736 Granville Street, Vancouver',
}) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) return; // already initialized

    const map = L.map(mapRef.current, {
      center,
      zoom,
      scrollWheelZoom: false,
      attributionControl: true,
      zoomControl: true,
    });

    // Stamen Toner Lite via Stadia Maps (free tier, no API key for localhost/dev)
    L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> ' +
          '&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> ' +
          '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> ' +
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
      }
    ).addTo(map);

    // Custom marker using a heritage-bronze SVG pin
    const markerIcon = L.divIcon({
      className: 'heritage-map-marker',
      html: `
        <svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 28 16 28s16-16 16-28C32 7.163 24.837 0 16 0z" fill="#8A6A3F"/>
          <circle cx="16" cy="16" r="7" fill="#F6F1E8"/>
          <circle cx="16" cy="16" r="3" fill="#8A6A3F"/>
        </svg>
      `,
      iconSize: [32, 44],
      iconAnchor: [16, 44],
      popupAnchor: [0, -44],
    });

    L.marker(center, { icon: markerIcon })
      .addTo(map)
      .bindPopup(
        `<div style="font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.4; color: #171717; padding: 2px 0;">
          <strong style="font-family: 'Playfair Display', Georgia, serif; font-size: 14px;">${markerLabel}</strong>
        </div>`,
        { offset: [0, -6] }
      );

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      role="img"
      aria-label={title}
      className={`heritage-map ${className}`}
      style={{ height, width: '100%' }}
    />
  );
}
