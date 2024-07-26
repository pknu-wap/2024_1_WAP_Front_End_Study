// logout.js
import { supabase } from "../lib/supabase";

export const logout = async (email, password) => {
    const { error } = await supabase.auth.signOut()
    
    console.log(error)
    if (error === null) {
        return true;
    }
    return false;
}
