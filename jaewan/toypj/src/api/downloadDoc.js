import { supabase } from "../lib/supabase"

export const downloadDoc = async (fileName) =>  {
    // console.log(fileName)
    const extension_list = ['.txt','.hwp','.doc','.docx','.xls','.xlsx','.pdf','.ppt','.pptx']

    let countError = 0
    extension_list.map(async extenstion => {
        const { data} = await supabase
        .storage
        .from('documents')
        .download(`${fileName}${extenstion}`)
        
        if (data===null) {
            countError+=1
            return ;
        }

        const url = URL.createObjectURL(data);
        window.location.href = url
    })
    if (countError===extension_list.length){
        alert('파일이 링크되지 않았습니다! 관리자에게 문의하여주세요!')
    }
}