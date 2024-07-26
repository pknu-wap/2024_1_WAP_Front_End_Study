// signUp.js
import { supabase } from "../lib/supabase";

export const signUp = async (email, password) => {
    const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
    
    console.log(error)
    if (error === null) {
        return true;
    }
    return false;
}
