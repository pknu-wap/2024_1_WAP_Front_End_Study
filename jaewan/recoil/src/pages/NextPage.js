import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { textState } from "../recoil/recoil";

function NextPage() {
    const navigate = useNavigate();
    const [text] = useRecoilState(textState);


  const goBack = () => {
    navigate(-1);
  } 
  return (
    <div className="App">
        <div>
            Echo: {text}
        </div>
      <button onClick={goBack}>goBack</button>
    </div>
  );
}

export default NextPage;
