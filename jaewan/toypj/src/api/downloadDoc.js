import { supabase } from "../lib/supabase";

export const downloadDoc = async (fileName) => {
  const extension_list = ['.txt', '.hwp', '.doc', '.docx', '.xls', '.xlsx', '.pdf', '.ppt', '.pptx'];

  let countError = 0;
  for (const extension of extension_list) {
    const { data } = await supabase.storage.from('documents').download(`${fileName}${extension}`);
    
    if (data === null) {
      countError += 1;
      continue;
    }

    const url = URL.createObjectURL(data);
    window.location.href = url;
    break;  // 파일을 성공적으로 찾으면 루프를 종료
  }

  if (countError === extension_list.length) {
    alert('파일이 링크되지 않았습니다! 관리자에게 문의하여주세요!');
  }
};
