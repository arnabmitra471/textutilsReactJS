import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
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
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
    }
    const handleCaplitalizeClick = ()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }
    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
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
                <button className="btn btn-primary mx-1" onClick={handleCaplitalizeClick}>Capitalize text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}