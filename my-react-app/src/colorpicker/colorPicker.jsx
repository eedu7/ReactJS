import {useState} from "react";
import "./colorPicker.css";

function ColorPicker() {

    const [bgColor, setBgColor] = useState("#ffffff");

    function handleBgColorChange(event) {
        setBgColor(event.target.value);
    }

    return (
        <div>
            <h1>Color Picker</h1>
            <div className="color-picker-container" style={{backgroundColor: bgColor}}>
                <h1>{bgColor}</h1>
            </div>
            <hr width="400" align="left"/>
            <label>Pick a color</label>
            <input type="color" onChange={handleBgColorChange} value={bgColor}/>
        </div>
    )
}

export default ColorPicker;