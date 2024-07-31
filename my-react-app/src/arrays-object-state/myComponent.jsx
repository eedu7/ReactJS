import {useState} from "react";
import "./style.css";

function MyComponent() {
    const [car, setCar] = useState([
        {
            "year": new Date().getFullYear(),
            "make": "Ford",
            "model": "Mustang"
        }
    ]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {"year": carYear, "make": carMake, "model": carModel};

        setCar(preCars => [...preCars, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleDeleteCar(index) {
        setCar(preCars => preCars.filter((element, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <>
            <table>
                <caption>Cars Objects</caption>
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Make</th>
                    <th>Model</th>
                </tr>
                </thead>
                <tbody>
                {car.map((car, index) => (<tr onClick={() => handleDeleteCar(index)} key={index}>
                    <td>{car.year}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                </tr>))}
                </tbody>
            </table>
            <input type="number" onChange={handleYearChange} placeholder="Enter car year"/>
            <input type="text" onChange={handleMakeChange} placeholder="Enter car make"/>
            <input type="text" onChange={handleModelChange} placeholder="Enter car model"/>
            <button onClick={handleAddCar}>Add car</button>
        </>
    )
}

export default MyComponent;