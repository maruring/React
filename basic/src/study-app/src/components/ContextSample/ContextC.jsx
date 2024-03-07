import React, {useContext} from "react";
import { UserContext, HobbyContext } from "./ContextRoot";

const ContextC = () => {
    //AppコンポーネントでProviderに渡したvalueの値を変数に代入することが出来る
    const user = useContext(UserContext);
    const hobby = useContext(HobbyContext);
    return(
        <div>
            <p>{user.name}, {user.age}歳</p>
            <p>趣味: {hobby}</p>
        </div>
    );
};

export default ContextC;