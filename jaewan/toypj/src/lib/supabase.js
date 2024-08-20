// supabase.js
import { createClient } from '@supabase/supabase-js'


const url = process.env.REACT_APP_SUPABASE_URL
const api_key = process.env.REACT_APP_SUPABASE_API_KEY
export const supabase = createClient(url, api_key);