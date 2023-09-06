import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpClick = () => {
        console.log("Uppercase was clicked", text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
            <div className="container">
                <h1>Your text summary</h1>
                <p>7646743 words and 8793478437 characters</p>
            </div>
        </>
    );
}