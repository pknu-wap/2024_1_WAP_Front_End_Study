//session.js
import { supabase } from "../lib/supabase";

export const getSession = async() => {
    const {data, error} = await supabase.auth.getSession()

    console.log(error)
    if (error === null){
        return data;
    }
    return true;
};