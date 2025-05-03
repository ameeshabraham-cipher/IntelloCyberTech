import { useState, useEffect } from 'react';

interface ClientLogo {
  name: string;
  imagePath: string;
}

/**
 * Custom hook that provides static client logos for the static site version
 * No longer uses an API call since we've converted to a frontend-only site
 */
export function useClientLogos() {
  // Using static data instead of API fetch for frontend-only implementation
  const staticClientLogos: ClientLogo[] = [
    { name: "BANK UAE", imagePath: "/images/client-images/client1.png" },
    { name: "TECH CORP", imagePath: "/images/client-images/client2.png" },
    { name: "HEALTH SYSTEMS", imagePath: "/images/client-images/client3.png" },
    { name: "UAE GOV", imagePath: "/images/client-images/client4.png" },
    { name: "EMIRATES GROUP", imagePath: "/images/client-images/client5.png" },
    { name: "DUBAI PORTS", imagePath: "/images/client-images/client6.png" }
  ];
  
  return staticClientLogos;
}