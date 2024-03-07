import React, {createContext, useState} from "react";
import ContextA from "./ContextA";

// createContextでAgeContextとNameContextを作成
export const UserContext = createContext();
export const HobbyContext = createContext();

const ContextRoot = () => {
  // useStateでuserを作成
    const [user, setUser] = useState({
        name: 'UserContext君',
        age: 25
    });
  // useStateでhobbyを作成
    const[hobby, setHobby] = useState('study'); 
    return (
    <div>
        {/* userContext。Providerを作成 */}
        <UserContext.Provider value={user}>
            <HobbyContext.Provider value={hobby}>
                <ContextA />
            </HobbyContext.Provider>
        </UserContext.Provider>
    </div>
    );
};

export default ContextRoot;