import React, {useState} from 'react';

function TextForm(props) {
    const [text, setText] = useState("Enter your texty");

    const onHandleClick = () => {
        console.log("You clicked On Handle Click");
        setText(text.toUpperCase());
    }

    const handleOnChange = (e) => {
        console.log("On change Handle");
        setText(e.target.value);
    }

    return (
        <form>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">{props.formTextHeading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-primary my-3" onClick={onHandleClick}>Convert To UpperCase</button>
            </div>
        </form>
    );
}

export default TextForm;