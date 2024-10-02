import { createClient, SupabaseClient } from '@supabase/supabase-js';

declare global {
  var supabase: SupabaseClient | null;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Please define the NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables inside .env.local'
  );
}

let cached = global.supabase;

if (!cached) {
  cached = global.supabase = null; // Initialize as null
}

async function dbConnect(): Promise<SupabaseClient> {
  // Return existing connection if available
  if (cached) {
    return cached;
  }

  // If no cached promise, create a new one
  if (!cached) {
    const client = createClient(supabaseUrl as string, supabaseAnonKey as string); // Assert non-null
    cached = global.supabase = client;
  }

  return cached;
}

export default dbConnect;
