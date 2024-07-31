import {useState} from "react";

function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("addFood").value;
        document.getElementById("addFood").value = "";

        setFoods(preFoods => [...preFoods, newFood]);

    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="addFood"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent;