"use client";

import { useEffect, useRef, useState } from "react";
import { loadGoogleMaps } from "../lib/googleMapsLoader";
import { SelectedPlace, LocationType } from "../types/google";
import { useFunFactsByCoordinates } from "../hooks/funfact";

export default function Map({ selectedPlace }: { selectedPlace?: SelectedPlace }) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);
  const { funFact, fetchFunFact, loading } = useFunFactsByCoordinates();


  const dropPin = (map: google.maps.Map, location: LocationType) => {
    if (!google?.maps?.marker?.AdvancedMarkerElement) {
      console.error("AdvancedMarkerElement is not available.");
      return;
    }

    const newMarker = new google.maps.marker.AdvancedMarkerElement({
      position: location,
      map,
    });

    setMarker(newMarker);
    fetchFunFact(location.lat, location.lng);
    map.panTo(location);
  };
  useEffect(() => {
    loadGoogleMaps().then(() => {
      const initialMap = new google.maps.Map(mapRef.current!, {
        zoom: 10,
        center: { lat: -26.2041, lng: 28.0473 }, 
        mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID, // REQUIRED FOR ADVANCED MARKERS
      });

      const infowindow = new google.maps.InfoWindow();

      setInfoWindow(infowindow);
      setMap(initialMap);

      /** 🟢 When user clicks the map */
      initialMap.addListener("click", (e: google.maps.MapMouseEvent) => {
        if (!e.latLng) return;

        dropPin(initialMap, { 
          lat: e.latLng.lat(), 
          lng: e.latLng.lng() 
        });
      });
    });
  }, []);

  useEffect(() => {
    if (selectedPlace && map) {
      dropPin(map, selectedPlace.location);
    }
  }, [selectedPlace]);

  

  useEffect(() => {
    if (infoWindow && marker && funFact) {
      infoWindow.setContent(`${loading ? "Loading..." : funFact}`);
      infoWindow.open({ anchor: marker, map });
    }
  }, [funFact, infoWindow, marker]);

  return (
    <div ref={mapRef} className="w-full" style={{ height: "600px" }} />
  );
}
