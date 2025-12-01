// src/types/google.ts

export interface SelectedPlace {
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}
