function Button() {

    // const handleClick = () => console.log("Clicked");
    // const handleClick2 = (name) => console.log(`Stop clicking me ${name}`);

    let count = 0;
    const handleClick3 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} clicked me ${count} times`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    }

    const handleClick4 = (e) => e.target.textContent = "OUCH!"


    return (
        <>
            {/*<button onClick={handleClick}>Click me 😊</button>*/}
            {/*<button onClick={() => handleClick2("Bro")}>Click me</button>*/}
            {/*<button onClick={() => handleClick3("BroCode")}>Click me</button>*/}
            <button onDoubleClick={(e) => handleClick4(e)} onClick={() => handleClick3(("BroCode"))}>Click me</button>
        </>
    )
}

export default Button;