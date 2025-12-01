"use client";

import { useEffect, useRef, useState } from "react";
import { loadGoogleMaps } from "../lib/googleMapsLoader";
import { SelectedPlace } from "../types/google";
export default function Map({ selectedPlace }: { selectedPlace: SelectedPlace }) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);

  useEffect(() => {
    loadGoogleMaps().then(() => {
      const initialMap = new google.maps.Map(mapRef.current!, {
        zoom: 10,
        center: { lat: -26.2041, lng: 28.0473 }, // Johannesburg default
      });

      const infowindow = new google.maps.InfoWindow();
      setInfoWindow(infowindow);
      setMap(initialMap);

      // Handle map clicks
      initialMap.addListener("click", (e: google.maps.MapMouseEvent) => {
        if (!e.latLng) return;

        dropPin(initialMap, e.latLng, `Lat: ${e.latLng.lat()}, Lng: ${e.latLng.lng()}`);
      });
    });
  }, []);

  // Drop pin on search result
  useEffect(() => {
    if (selectedPlace && map) {
      dropPin(map, selectedPlace.location, selectedPlace.address);
    }
  }, [selectedPlace, map]);

  const dropPin = (map: google.maps.Map, location: any, content: string) => {
    if (marker) marker.setMap(null);

    const newMarker = new google.maps.Marker({
      position: location,
      map,
    });

    map.panTo(location);

    infoWindow?.setContent(content);
    infoWindow?.open({ anchor: newMarker, map });

    setMarker(newMarker);
  };

  return <div ref={mapRef} className="w-full" style={{ height: "600px" }} />;
}
