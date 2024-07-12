import { useNavigate } from "react-router-dom";
import {useRecoilState} from 'recoil';
import {chaCountState, textState} from '../recoil/recoil';

function NextPage() {

  const navigate=useNavigate();

  const goBack =() =>{
        navigate(-1);
    }

  const[text]=useRecoilState(textState);

  return (
    <div className="App">
      <div>
        Echo:{text}
      </div>
      Nssdfsg
      <button onClick={goBack}>goBack</button>
    </div>
  );
}

export default NextPage;