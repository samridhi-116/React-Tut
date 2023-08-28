import React from "react";
import ReactDOM  from "react-dom/client";

// to avoid complicated structure of elements, 

const heading = <h1>This is practice time.</h1>

const SubHeading = () => (
        <h3>Practicing whatever akshay did</h3>
    )
const Header = () => {
    return (
        <div>
            {heading}
            <SubHeading />
            <h4>points to remember</h4>
            <ul>
                <li>In return write as many jsx you want, but inside a single tag. (here div) </li>
                <li>And, create element se hum ek element create krte hai, aur unn elements ko render krne k liye hum root create krte hai... createRoot</li>
                <li>Return statement and usse pehle {} are not compulsory, simply use ( {"<div> </div>"} )</li>
            </ul>
        </div>
        
    )
};
const result = ReactDOM.createRoot(document.getElementById("root"));
result.render(<Header/>);