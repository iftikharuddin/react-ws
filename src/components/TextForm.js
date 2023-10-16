import React, {useState} from 'react';

function TextForm(props) {
    const [text, setText] = useState("");

    const onHandleClick = (e) => {
        e.preventDefault();
        console.log("You clicked On Handle Click");
        setText(text.toUpperCase());
        props.configureAlert("Converted to Upper Case", "success");

    }

    const onHandleLowerClick = (e) => {
        e.preventDefault();
        console.log("You clicked On Lower Handle Click");
        setText(text.toLowerCase());
        props.configureAlert("Converted to Lower Case", "success");
    }

    const handleOnChange = (e) => {
        e.preventDefault();
        console.log("On change Handle");
        setText(e.target.value);
    }

    const onHandleClearTextClick = (e) => {
        e.preventDefault();
        console.log("Text clear");
        const text = "";
        setText(text);
        props.configureAlert("Text cleared!", "success");
    }

    const onHandleMakeBoldClick = (e) => {
        e.preventDefault();
        console.log("Text now bold");
        setText(text.bold());
        props.configureAlert("Text is BOLD now", "success");
    }

    return (
        <>
            <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <form>
                    <h1>{props.heading}</h1>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">{props.formTextHeading}</label>
                        <textarea className="form-control" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                        <button className="btn btn-primary mx-1 my-3 my-1" onClick={onHandleClick}>Convert To UpperCase</button>
                        <button className="btn btn-primary mx-1 my-3 my-1" onClick={onHandleLowerClick}>Convert To LowerCase</button>
                        <button className="btn btn-primary mx-1 my-3 my-1" onClick={onHandleClearTextClick}>Clear Text</button>
                        <button className="btn btn-primary mx-1 my-3 my-1" onClick={onHandleMakeBoldClick}>Make Text Bold</button>
                    </div>
                </form>
            </div>

            <div className="container my-2" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
               <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length !==0 }).length} words & {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h1> Preview </h1>
                <p>{text.length > 0 ? text : 'Enter text to preview '}</p>
            </div>
        </>
    );
}

export default TextForm;