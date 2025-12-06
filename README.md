This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

Set Environment Variables




📍 Google Maps + Advanced Markers + Fun Facts
Complete Setup Guide (Next.js + TypeScript)

This guide documents the full integration of:

Google Maps JavaScript API (v3.59+, “importLibrary”)

Advanced Marker Element

Fun Facts API Hook (Wikipedia GeoSearch + Summary API)

Dynamic map script loading in Next.js

Clickable map pins + search-based pins

🚀 Features

Load the Google Maps API only once, safely in Next.js.

Support for AdvancedMarkerElement (modern Google Maps markers).

Single-marker behavior (old marker removed before adding a new one).

Click anywhere on the map to drop a pin.

Search results automatically drop a pin.

Live fun facts displayed in an InfoWindow for the clicked location.

Fully typed with TypeScript.

📌 1. Google Cloud Setup
Step 1 — Enable Google Maps JavaScript API

Enable:

Maps JavaScript API

Places API

Geocoding API (optional)

Maps Rendering (for Map IDs)

👉 Docs:
https://developers.google.com/maps/documentation/javascript/overview

Step 2 — Create a Map ID for Advanced Markers

Advanced Markers require a Map ID.

Go to Google Cloud Console
https://console.cloud.google.com/google/maps-apis

Select Maps → Map Management

Click Create Map ID

Choose:

Type: JavaScript

Features: enable Advanced Markers

Give it a name

Copy the Map ID

👉 Official Map ID documentation:
https://developers.google.com/maps/documentation/javascript/map_ids

Step 3 — Add environment variables

Create a .env.local file:

NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_GOOGLE_MAP_ID=YOUR_MAP_ID

