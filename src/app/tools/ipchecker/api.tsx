"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface GeoData {
  country_code: string;
  country_name: string;
  city: string;
  postal: string;
  latitude: number;
  longitude: number;
  IPv4: string;
  state: string;
}

export const AutoIPFetch = () => {
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchIPInfo = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("https://geolocation-db.com/json/");
      if (!response.ok) throw new Error("Failed to fetch IP information");
      const data: GeoData = await response.json();
      setGeoData(data);
    } catch (err) {
      setError("Error fetching IP data");
      console.error("Error fetching API data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIPInfo();
  }, []);

  return (
    <div className=" min-h-screen flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-900">
        Your IP Address Information
      </h1>
      <div className="w-full max-w-screen-2xl rounded-lg shadow-md p-6 sm:p-10 md:p-20 mx-auto my-5 bg-white">
        {isLoading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {geoData && (
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <Image
                src={`https://hatscripts.github.io/circle-flags/flags/${geoData.country_code.toLowerCase()}.svg`}
                alt="flag"
                width="100"
                height={100}
                className="animate-bounce"
              ></Image>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <span className="font-semibold text-lg sm:text-xl">
                  Country Code:{" "}
                </span>
                <span className="font-bold">{geoData.country_code}</span>
              </div>
              <div className="text-center">
                <span className="font-semibold text-lg sm:text-xl">
                  Country Name:{" "}
                </span>
                <span className="font-bold">{geoData.country_name}</span>
              </div>
              <div className="text-center">
                <span className="font-semibold text-lg sm:text-xl">
                  IPv4 Address:{" "}
                </span>
                <span className="font-bold">{geoData.IPv4}</span>
              </div>
              <div className=" text-center">
                <span className="font-semibold text-lg sm:text-xl">
                  Longitude:{" "}
                </span>
                <span className="font-bold">{geoData.longitude}</span>
              </div>
              <div className="text-center">
                <span className="font-semibold text-lg sm:text-xl">
                  Latitude:{" "}
                </span>
                <span className="font-bold">{geoData.latitude}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
