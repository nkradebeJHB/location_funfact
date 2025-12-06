// src/types/google.ts

export interface SelectedPlace {
  address: string;
  location: LocationType
}


export interface LocationType {
  lat: number;
  lng: number;
}