import {useState} from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName("Tom Cruise");
    }

    const incrementAge = () => {
        if (age < 55) setAge(age + 1);
    }
    const decrementAge = () => {
        if (age > 0) setAge(age - 1);
    }
    const resetAge = () => {
        setAge(0);
    }
    const toogleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={resetAge}>Reset Age</button>
            <button onClick={decrementAge}>Decrement Age</button>

            <p>Employee: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toogleEmployedStatus}>Toggle Status</button>
        </div>
    )

}

export default MyComponent;