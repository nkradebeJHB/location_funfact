import { useState } from "react";

export function useFunFactsByCoordinates() {
  const [funFact, setFunFact] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFunFact = async (lat: number | null, lng: number | null) => {
    if (lat == null || lng == null) return;

    setLoading(true);
    setError(null);

    try {
      // 1. GeoSearch
      const geoSearchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${lat}%7C${lng}&gsradius=10000&gslimit=1&format=json&origin=*`;

      const geoResponse = await fetch(geoSearchUrl);
      const geoData = await geoResponse.json();

      if (!geoData.query?.geosearch?.length) {
        setFunFact("No fun facts available for this location.");
        setLoading(false);
        return;
      }

      const pageTitle = geoData.query.geosearch[0].title;

      const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        pageTitle
      )}`;
      const summaryResponse = await fetch(summaryUrl);
      const summaryData = await summaryResponse.json();

      if (!summaryData.extract) {
        setFunFact("Sorry, no fun facts found for this location.");
        setLoading(false);
        return;
      }

      const sentences = summaryData.extract
        .split(".")
        .map((s: string) => s.trim())
        .filter(Boolean);

      const randomSentence =
        sentences[Math.floor(Math.random() * sentences.length)];

      setFunFact(`${randomSentence}.`);
    } catch (err) {
      setError("Failed to fetch fun facts.");
      setFunFact("Sorry, no fun facts found for this location.");
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchFunFact,
    funFact,
    loading,
    error,
  };
}
