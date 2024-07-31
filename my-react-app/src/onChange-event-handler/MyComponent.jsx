// onChange = event handler used primarily with form elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes


import {useState} from "react";

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("Visa");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        if (event.target.value !== "") {
            setPayment(event.target.value);
        }
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <>
            <input value={name} onChange={handleNameChange} type="text"/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" min={1}/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"
                      rows={4}/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </>
    )
}

export default MyComponent;