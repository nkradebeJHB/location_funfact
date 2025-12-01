"use client";

import { useEffect, useRef } from "react";
import { loadGoogleMaps } from "../lib/googleMapsLoader";

interface OnPlaceSelectedProps {
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}

export default function AutocompleteInput({ onPlaceSelected }: { onPlaceSelected: (place: OnPlaceSelectedProps) => void }) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loadGoogleMaps().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current!, {
        fields: ["geometry", "formatted_address"],
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) return;

        onPlaceSelected({
          address: place.formatted_address || "",
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
        });
      });
    });
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search for a place..."
      className="border p-2 rounded w-full mb-4 m-8"
    />
  );
}
