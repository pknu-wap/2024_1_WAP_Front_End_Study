import { supabase } from "../lib/supabase";

export const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
    
    console.log(error)
    if (error === null) {
        return true;
    }
    return false;
}