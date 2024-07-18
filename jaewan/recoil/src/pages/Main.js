import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { textState } from "../recoil/recoil";


function Main() {
    const[text,setText] = useRecoilState(textState);

    const navigate = useNavigate();
    const onChange = (event) => {
        setText(event.target.value);
    };

  const goToNextPage = () => {
    navigate('/nextPage');
  } 

    
  return (
    <div className="App">
        <input type="text" value={text} onChange={onChange} />
      <button onClick={goToNextPage}>Go to Next Page</button>
      <br/>
      <div>
        Echo: {text}
      </div>
    </div>
  );
}

export default Main;
