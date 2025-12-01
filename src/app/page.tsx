"use client";

import { useState } from "react";
import SearchBox from "../components/AutocompleteInput";
import Map from "../components/Map";
import { SelectedPlace } from "../types/google";
export default function HomePage() {
  
  const [selectedPlace, setSelectedPlace] = useState<SelectedPlace>();

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Google Maps Demo</h1>

      
      <div className="p-8">
        <SearchBox onPlaceSelected={setSelectedPlace} />
      </div>
      <Map selectedPlace={selectedPlace} />
    </main>
  );
}
