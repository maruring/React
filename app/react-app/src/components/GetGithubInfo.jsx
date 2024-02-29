import React from "react";
import { useEffect, useState } from "react";

const GetGithubInfo = () => {
    const [id, setId] = useState('maruring');
    const [name, setName] = useState('');
    const ids = ['maruring', 'aws', 'google'];
    const getRandomId = () => {
        const _id = ids[Math.floor(Math.random() * ids.length)]
        setId(_id)
    }
    useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setName(data.name);
        })
        .catch(error => {
            console.log(error)
        })
    }, [id]);

    return(
        <div>
            <button onClick={getRandomId}>IDを変更</button>
            <p>id: {id}</p>
            <p>ユーザー名: {name}</p>
        </div>
    );
};

export default GetGithubInfo;