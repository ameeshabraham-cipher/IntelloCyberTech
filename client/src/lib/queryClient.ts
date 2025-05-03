import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * STATIC SITE VERSION
 * This is a frontend-only implementation without server API calls
 * All query functions will return empty data or static fallback data
 */

// Simplified version that handles frontend-only usage
export async function apiRequest(
  url: string,
  options?: RequestInit,
): Promise<any> {
  console.log('Static site: API request to', url, 'intercepted and returning empty data');
  // Return empty data as we don't have backend API endpoints
  return { success: true, data: [] };
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    console.log('Static site: Query to', queryKey[0], 'intercepted and returning empty data');
    // For static site, return empty results for all queries
    return { success: true, data: [] };
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
