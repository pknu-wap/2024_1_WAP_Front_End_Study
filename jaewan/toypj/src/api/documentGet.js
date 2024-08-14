import { supabase } from "../lib/supabase";

export const documentGet = async() => {
    const { data } = await supabase
        .from('school_doc')
        .select('*')

    // console.log(data)
    // console.log(error)
    if (data !== null){
        return data
    }
    return [];
}
