import { Database } from "@/types/database";
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        fetch: (url, options = {}) =>
          // Disable cache for all requests
          fetch(url, { ...options, cache: "no-store" }),
      },
    }
  );
