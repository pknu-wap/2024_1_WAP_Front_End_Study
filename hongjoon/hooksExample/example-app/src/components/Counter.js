import React, {useState} from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <p>현재 카운트 : {value}</p>
            <button onClick={()=> setValue(value+1)}>+1</button>
            <button onClick={()=> setValue(value-1)}>-1</button>
        </div>
        
    )
}

export default Counter;