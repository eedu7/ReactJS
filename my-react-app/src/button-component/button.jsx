import styles from "./button.module.css"

// 1. External Styles -> Great for small projects -> see card-component
// 2. Modules Styles -> For individual component
// 3. Inline Styles -> For small component

function Button() {

    const inline_styles = {
        "background-color": "hsl(200, 100%, 40%)",
        "color": "white",
        "padding": "10px 20px",
        "border-radius": "5px",
        "border": "none",
        "cursor": "pointer",
    }

    return (
        <div>
            {/* Inline Styling */}
            <button style={inline_styles}>Click Me!</button>
            {/* External Styling */}
            <button className={styles.button}>Click Me!</button>
        </div>
    );
}

export default Button;