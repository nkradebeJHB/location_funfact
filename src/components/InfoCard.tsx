"use client";

interface InfoCardProps {
  title: string;
  lat: number;
  lng: number;
}

export default function InfoCard({ title, lat, lng }: InfoCardProps) {
  return (
    <div className="absolute top-4 left-4 bg-white shadow-lg rounded p-4 z-50 w-64">
      <h2 className="font-bold text-lg mb-2">{title}</h2>

      <p className="text-sm">
        <span className="font-semibold">Latitude:</span> {lat}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Longitude:</span> {lng}
      </p>
    </div>
  );
}
