// useEffect() => React hooks that tells React to do some code when (pick one)
//                  This component re-renderes
//                  This component mounts
//                  The state of a value

import {useEffect, useState} from "react";

/**
 * useEffect(function, [dependencies])
 * 1. useEffect(() => {}) // Runs after every re-render
 * 2. useEffect(() => {}, [])  // Runs only on mount
 * 3. useEffect(() =? {}, [value]}  // Runs on mount + when value changes
 *
 * USES
 * 1. Event Listeners
 * 2. Dom Manipulation
 * 3. Subscription (real-time updates)
 * 4. Fetching data from an API
 * 5. Clen up when a component unmounts
 */



function MyComponent() {

    const [count, setCount] = useState(0);
    // useEffect(() => {
    // document.title = `Count ${count}`;
    // });
    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count]);

    function addCount() {
        setCount(count + 1);
    }

    function subtractCount() {
        setCount(count - 1);
    }


    return (
        <>
            <p>Count: {count}</p>
            <button onClick={addCount}>+</button>
            <button onClick={subtractCount}>-</button>
        </>
    )
}

export default MyComponent;

