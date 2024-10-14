import { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}){
    const [mode, setMode] = useState("light");

    return (
        <UserContext.Provider value={{mode, setMode}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;