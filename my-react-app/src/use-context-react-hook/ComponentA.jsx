/**
 * `useContext()` => React Hook that allows you to share values
 *                  between multiple levels of components
 *                  withuout passing props through each level
 */

import {createContext, useState} from "react";
import ComponentB from "./ComponentB.jsx";
import "./styles.css";

export const UserContext = createContext()

function ComponentA() {
    const [user] = useState("Guest");

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>)
}


export default ComponentA;
