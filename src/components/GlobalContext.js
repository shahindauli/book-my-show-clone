import React, { createContext, useState, useEffect } from "react";
export const Globalcontext = createContext();
const GlobalContext = (props) => {
    const [loggedInUser, setLoggedInUser] = useState(false)


    return (
        <>
            <Globalcontext.Provider
                value={{
                    loggedInUser, setLoggedInUser
                }}>

                {props.children}

            </Globalcontext.Provider>

        </>
    )
}
export default GlobalContext;