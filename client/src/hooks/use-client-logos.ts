import { useState, useEffect } from 'react';

interface ClientLogo {
  name: string;
  imagePath: string;
}

/**
 * Custom hook to fetch client logos dynamically from the client-images directory
 * Any image placed in the client/public/images/client-images/ directory will 
 * automatically be included in the carousel
 */
export function useClientLogos() {
  const [clientLogos, setClientLogos] = useState<ClientLogo[]>([]);

  useEffect(() => {
    // Function to fetch the client logos
    async function fetchClientLogos() {
      try {
        // For client-side, we can use the fetch API to get a JSON list of images
        // The server routes.ts file will handle providing this list
        const response = await fetch('/api/client-logos');
        if (!response.ok) {
          throw new Error('Failed to fetch client logos');
        }
        const data = await response.json();
        setClientLogos(data);
      } catch (error) {
        console.error('Error fetching client logos:', error);
        
        // Fallback to default logos if the API fails
        setClientLogos([
          { name: "BANK UAE", imagePath: "/images/client-images/client1.png" },
          { name: "TECH CORP", imagePath: "/images/client-images/client2.png" },
          { name: "HEALTH SYSTEMS", imagePath: "/images/client-images/client3.png" }
        ]);
      }
    }

    fetchClientLogos();
  }, []);

  return clientLogos;
}