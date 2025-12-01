"use client";

import { useState } from "react";
import SearchBox from "../components/AutocompleteInput";
import Map from "../components/Map";

export default function HomePage() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Google Maps Demo</h1>

      <SearchBox onPlaceSelected={setSelectedPlace} />

      <Map selectedPlace={selectedPlace} />
    </main>
  );
}
