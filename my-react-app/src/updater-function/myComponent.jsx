// updated function => A function as an argument to setState() usually
//                      ex. setYear(arrow function)
//                      Allow for safe update based on the previous state
//                      Used with multiple states updates and asynchronus function
//                      Good Practice to use update functions

import {useState} from "react";

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {
        // The count will be updates once, if it was 1, then it will be 2 instead of 3
        // Uses the Current state to calculate the NEXT state.
        // set functions do not trigger an update
        // React batches together state updates for performance response
        // NEXT state becomes the CURRENT STATE after an update
        setCount(count + 1);
        setCount(count + 1);
    }

    // We can do this
    function increment_() {
        setCount(preCount => preCount + 1);
        setCount(preCount => preCount + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (<div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={increment_}>Increment (Updater Fucntion)</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </div>);
}

export default MyComponent;