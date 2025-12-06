This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Before starting the development server, ensure you have installed the project dependencies. Run:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Once the dependencies are installed, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

You can edit the page by modifying `app/page.tsx`. Changes will auto-update in the browser.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load [Geist](https://vercel.com/font), a modern font family by Vercel.

## Learn More

Explore the following resources to learn more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive guide to Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial for beginners.

Check out [the Next.js GitHub repository](https://github.com/vercel/next.js) to contribute or provide feedback.

---

## 📍 Google Maps + Advanced Markers + Fun Facts

### Complete Setup Guide (Next.js + TypeScript)

This guide explains how to integrate:

- **Google Maps JavaScript API** (v3.59+, using `importLibrary`)
- **Advanced Marker Element**
- **Fun Facts API Hook** (Wikipedia GeoSearch + Summary API)
- **Dynamic map script loading in Next.js**
- **Interactive map pins and search-based pins**

### 🚀 Features

- Load the Google Maps API safely in Next.js.
- Support for `AdvancedMarkerElement` (modern Google Maps markers).
- Drop a pin by clicking anywhere on the map.
- Automatically drop pins for search results.
- Display live fun facts in an InfoWindow for clicked locations.

---

### 📌 1. Google Cloud Setup

#### Step 1 — Enable Google Maps JavaScript API

Enable the following APIs in your Google Cloud Console:

- **Maps JavaScript API**
- **Places API**
- **Geocoding API** (optional)
- **Maps Rendering** (for Map IDs)

👉 [API Documentation](https://developers.google.com/maps/documentation/javascript/overview)

#### Step 2 — Create a Map ID for Advanced Markers

Advanced Markers require a Map ID. Follow these steps:

1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis).
2. Navigate to **Maps → Map Management**.
3. Click **Create Map ID**.
4. Configure the Map ID:
    - **Type**: JavaScript
    - **Features**: Enable Advanced Markers
5. Name the Map ID and copy it.

👉 [Official Map ID Documentation](https://developers.google.com/maps/documentation/javascript/map_ids)

#### Step 3 — Add Environment Variables

Create a `.env` file in your project root:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_GOOGLE_MAP_ID=YOUR_MAP_ID
```
