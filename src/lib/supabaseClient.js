import { createClient } from "@supabase/supabase-js";

let supabase = null;

export function getSupabaseClient() {
  if (supabase) return supabase;

  // Support both server-side and client-side usage
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL)?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  // Use service role key for server-side, anon key for client-side
  const key = serviceKey || anonKey;

  if (!url || !key) {
    throw new Error("Missing SUPABASE_URL or SUPABASE key environment variables.");
  }

  supabase = createClient(url, key, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
    },
  });

  return supabase;
}
