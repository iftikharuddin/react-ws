import React, {useState} from 'react';

function About(props) {
    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "black"
    });

    const [btnText, setBtnText] = useState("Enable White mode");

    const onBtnClick = () => {
        if(myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            });
            setBtnText("Enable Dark mode")
        } else {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            });
            setBtnText("Enable White mode")
        }
    }

    return (
        <div className="container my-3" style={myStyle}>
            <div className="accordion my-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" style={myStyle} aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the
                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" style={myStyle} aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" style={myStyle} aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" aria-labelledby="headingThree"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                            collapse plugin adds the appropriate classes that we use to style each element. These classes
                            control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                            modify any of this with custom CSS or overriding our default variables. It's also worth noting
                            that just about any HTML can go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary my-3" type="button" onClick={onBtnClick}>{btnText}</button>
            </div>
        </div>
    );
}

export default About;