function List() {
    // List of items
    // const fruits = ["apple", "banana", "pine-apple", "orange"];

    // List of objects
    const fruitsObj = [
        {"id": 1, "name": "apple", "calories": 95},
        {"id": 2, "name": "orange", "calories": 45},
        {"id": 3, "name": "banana", "calories": 105},
        {"id": 4, "name": "coconut", "calories": 159},
        {"id": 5, "name": "pineapple", "calories": 37},
    ]

    // fruitsObj.sort((a, b) => a.name.localeCompare(b.name));  // Ascending Order Alphabetical Order
    // fruitsObj.sort((a, b) => b.name.localeCompare(a.name));  // Descending Order Alphabetical Order
    // fruitsObj.sort((a, b) => a.calories - b.calories);  // Ascending Order Numerical
    // fruitsObj.sort((a, b) => b.calories - a.calories);  // Desending Order Numerical

    // Working wit the list
    // const listItem = fruits.map(fruit => <li>{fruit}</li>)

    // Working with the list of objects
    const listFruitObj = fruitsObj.map(fruit =>
        <li key={fruit.id}>{fruit.name}: &nbsp;{fruit.calories}</li>)


    return (
        // Rendering the list
        // <ol className="list">
        //     {listItem}
        // </ol>

        <>
            <ul>
                {listFruitObj}
            </ul>
        </>
    );
}

export default List;