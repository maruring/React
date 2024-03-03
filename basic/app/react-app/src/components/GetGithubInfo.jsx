import React from "react";
import { useEffect, useState } from "react";

const GetGithubInfo = () => {
    const [id, setId] = useState('');
    const [fixId, setFixId] = useState('');
    const [name, setName] = useState('');

    const textInputSetId = (e) =>{
        setId(e.target.value);
    };

    const onClickSetFixId = () => {
        setFixId(id);
        setId('');
    };

    useEffect(() => {
        fetch(`https://api.github.com/users/${fixId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setName(data.name);
        })
        .catch(error => {
            console.log(error)
        })
    }, [fixId]);

    return(
        <div>
            <input onChange={(e) => {textInputSetId(e)}} type="text" value={id} />
            <button onClick={onClickSetFixId}>確定</button>
            <p>id: {fixId}</p>
            <p>ユーザー名: {name}</p>
        </div>
    );
};

export default GetGithubInfo;