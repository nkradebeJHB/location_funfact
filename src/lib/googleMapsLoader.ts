let isLoaded = false;
let loadPromise: Promise<void> | null = null;

export function loadGoogleMaps(): Promise<void> {
  if (isLoaded) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve) => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src^="https://maps.googleapis.com/maps/api/js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", async () => {
        await importRequiredLibraries();
        isLoaded = true;
        resolve();
      });
      return;
    }

    // Create script tag with REQUIRED libraries
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    }&libraries=places,marker,geometry&v=beta`;
    script.async = true;
    script.defer = true;

    script.onload = async () => {
      await importRequiredLibraries();
      isLoaded = true;
      resolve();
    };

    document.head.appendChild(script);
  });

  return loadPromise;
}

/** Ensure these imports exist before using AdvancedMarkerElement */
async function importRequiredLibraries() {
  // Load core map rendering
  await google.maps.importLibrary("maps");

  // MUST be loaded for AdvancedMarkerElement
  await google.maps.importLibrary("marker");
}
