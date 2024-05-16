import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        console.log('랜더링이 되었습니다!');
    },[])

    useEffect(()=> {
        if (name!==''){
            console.log('이름이 변경되었습니다!');    
        }
    },[name])
    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e=> {
        setNickName(e.target.value);
    }

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return() => {
            console.log('cleanup');
            console.log(name)
        };
    });

    
    
    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickName} onChange={onChangeNickName} />
            </div>
            <div>
                이름 : {name}
            </div>
            <div>
                별명 : {nickName}
            </div>
            
        </div>
    )
}

export default Info;