import ComponentC from "./ComponentC.jsx";
import {useContext} from "react";
import {UserContext} from "./ComponentA.jsx";

function ComponentB() {
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1>ComponentB</h1>
            <p>{user}</p>
            <ComponentC/>
        </div>)
}


export default ComponentB;
