import React, { useState } from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared","success");
    }
    const handleCaplitalizeClick = ()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Text has been capitalized","success");
    }
    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success");
    }
    
    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode==="light"?"dark":"light"}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"rgb(255,255,255)":"rgb(31,40,106)",color:props.mode ==="dark"?"white":"black"}}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCaplitalizeClick}>Capitalize text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-2">
                <h2 className={`text-${props.mode==="light"?"dark":"light"}`}>Your text summary</h2>
                <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
                <p className={`text-${props.mode==="light"?"dark":"light"}`}>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} minutes read </p>
                <h2 className={`text-${props.mode==="light"?"dark":"light"}`}>Preview</h2>
                <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text}</p>
            </div>
        </>
    );
}