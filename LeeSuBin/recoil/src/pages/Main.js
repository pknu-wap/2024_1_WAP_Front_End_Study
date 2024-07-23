import { useNavigate } from "react-router-dom";
import {useRecoilState} from 'recoil';
import {chaCountState, textState} from '../recoil/recoil';

function Main() {
    const[text, setText]=useRecoilState(textState);
    const navigate=useNavigate();

    const goToNextPage =() =>{
        navigate('/nextPage');
    }

    const onChange=(event) =>{
        setText(event.target.value);
    }

  return (
    <div className="App">
      <input type="text" value={text} onChange={onChange}/> 
      <br/>
      <div>
        Echo:{text}
      </div>
      main
      <button onClick={goToNextPage}>goToNextPage</button>
    </div>
  );
}

export default Main;