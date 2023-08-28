//! now, this is file throws errors.. bcoz we are using react and react-DOM... but in last lect it was not giving any error... why?? -> bcoz we imported react through cdn link... and we our not using them now.. bcoz we installed our react package.. 
//* then why errors now also?? -> we didn't import react to this js file... we need to specify where to run react.. where to use it.. so we need ti import react from it's package

import React from "react";
import ReactDOM from "react-dom/client";

//now it's not a normal js file... it's a module now.. a react module.

const heading = React.createElement(
    "h1", 
    {
        id: "head"
    }, 
    "Namaste React!"
);
const heading2 = React.createElement(
    "h2",
    {
        id: "head2"
    }, 
    "Let's create a React-DOM Tree"
);
const heading3 = React.createElement(
    "h3", 
    {
        id: "head3"
    }, 
    "This is Practice File"
);
const container = React.createElement(
    "div", 
    {
        id: "container"
    }, 
    [heading, heading2, heading3]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
