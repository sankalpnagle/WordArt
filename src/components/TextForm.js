import React, { useState } from "react";

export default function TextForm(props) {
    const handleOnUpClick =()=>{
        // console.log("uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnLoClick =()=>{
        // console.log("uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearOnClick =()=>{
        // console.log("uppercase was clicked"+text);
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("onChange");
        setText(event.target.value)
    }

  const  [text, setText ] = useState("");
  return (
    <>
      <div>
        <h1 className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3 container my-4 " style={{color: props.mode==='dark'?'white':'black'}} >
          <label htmlFor="mybox" className="form-label">
            Enter your words
          </label>
          <textarea className="form-control my-2" style={{background:props.mode==='light'?"white":"#1c1e23",color:props.mode==='light'?"black":"white"}} id="mybox" value={text} onChange={handleOnChange} rows="8"  ></textarea>
          <button type="button" onClick={handleOnUpClick} className="btn btn-primary m-1">
            convert to uppercase
          </button>
          <button type="button" onClick={handleOnLoClick} className="btn btn-primary m-1">
            convert to lowercase
          </button>
          <button type="button" onClick={clearOnClick} className="btn btn-primary m-">
            Clear Text
          </button>
        </div>
        <div className="container " style={{color: props.mode==='dark'?'white':'black'}} >
            <h2>Your Text Summery</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h2>Priview</h2>
            <p>{text.length>0?text:"Enter somethings in the text box.."}</p>
        </div>
      </div>
    </>
  );
}
