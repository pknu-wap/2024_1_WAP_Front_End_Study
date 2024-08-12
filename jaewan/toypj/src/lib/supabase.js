// supabase.js
import { createClient } from '@supabase/supabase-js'


const url = "https://omqagsirlxmcgtzpooaf.supabase.co"
const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcWFnc2lybHhtY2d0enBvb2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MTQ1MjMsImV4cCI6MjAzNzI5MDUyM30.kGH5rWhvPWEUDnsO5waWdqfZ66xv7dniYz4LOfmQpGY"
export const supabase = createClient(url, api_key);