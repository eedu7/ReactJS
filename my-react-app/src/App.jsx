// import Card from "./card-component/card.jsx";
// import Button from "./button-component/button.jsx";
// import Student from "./student-component-props/student.jsx"
// import UserGreeting from "./condition-rendering-component/userGreeting.jsx";
// import List from "./renderingList/List.jsx";
// import Button from "./react-click-events/Button.jsx"

// import ProfilePicture from "./react-click-events/ProfilePicture.jsx";
// import MyComponent from "./react-hook/useStateReactHook.jsx";
// import MyComponent from "./onChange-event-handler/MyComponent.jsx";

// import ColorPicker from "./colorpicker/colorPicker.jsx";


// import MyComponent from "./updater-function/myComponent.jsx";
// import MyComponent from "./update-object-state/myComponent.jsx";
// import MyComponent from "./update-arrays/myComponent.jsx";

import MyComponent from "./arrays-object-state/myComponent.jsx";

function App() {

    // const fruitsObj = [
    //     {"id": 1, "name": "apple", "calories": 95},
    //     {"id": 2, "name": "orange", "calories": 45},
    //     {"id": 3, "name": "banana", "calories": 105},
    //     {"id": 4, "name": "coconut", "calories": 159},
    //     {"id": 5, "name": "pineapple", "calories": 37},
    // ]
    //
    // const vegetables = [
    //     {"id": 1, "name": "potatos", "calories": 110},
    //     {"id": 2, "name": "celerye", "calories": 15},
    //     {"id": 3, "name": "tomato", "calories": 25},
    //     {"id": 4, "name": "corn", "calories": 63},
    //     {"id": 5, "name": "ladyfinger", "calories": 50},
    // ]
    return (<>
        {/*  Card Component  */}
        {/*<Card/>*/}

        {/* Button Component */}
        {/*<Button/>*/}

        {/* Student Component with Props*/}
        {/*<Student id={1} name="Son Goku" age={42} student={false}/ >*/}

        {/* Conditional Rendering UserGreeting*/}
        {/*<UserGreeting isLoggedIn={false} username="MueedAhmad"/>*/}

        {/* Rendering List*/}
        {/*<List/>*/}

        {/* Reusable List Component*/}
        {/*{fruitsObj.length > 0 ? <List items={fruitsObj} category="Fruits"/> : null}*/}
        {/*{vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}*/}

        {/* Click Event*/}
        {/*<Button/>*/}
        {/*<ProfilePicture/>*/}

        {/* React useState*/}
        {/*<MyComponent/>*/}

        {/* onChange Event Handler */}
        {/*<MyComponent/>*/}

        {/* ColorPicker */}
        {/*<ColorPicker/>*/}

        {/* Updater Function */}
        {/*<MyComponent/>*/}

        {/* Updater Function Objects */}
        {/*<MyComponent/>*/}

        {/* Updating the arrays*/}
        {/*<MyComponent/>*/}

        {/* Updating the arrays of objects*/}
        <MyComponent/>
    </>)
}

export default App;