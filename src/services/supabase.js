import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hqgidpvmavzhlcyomtqy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZ2lkcHZtYXZ6aGxjeW9tdHF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NzgyNzcsImV4cCI6MjAxOTQ1NDI3N30.Omy-sF4AKe171pEBzeh1f3ty8SBIQKLSXD5nHJueusw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
