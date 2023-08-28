import React from "react";
import ReactDOM from "react-dom/client";
import { createElement as ce} from "react";

// see, we have createElement method in our node_modules, so rather than writing React.create... we can just use import.. but code still looks messyy
const header = ce(
    "div", {
        id:"header",
        key: "header-sec"
    }, 
    [
    ce(
    "h1", 
    {
        id: "icon",
        key: "icon"
    }, 
    "Namaste React!"),
    ce(
        "ul",
        {
            id: "head-elements",
            key: "elements"
        }, 
        [
            ce(
                "li",
                {
                    id: "home",
                    key: "home"
                }, 
                "Home"
            ),
            ce(
                "li",
                {
                    id: "home",
                    key: "about"
                }, 
                "About Us"
            ),
            ce(
                "li",
                {
                    id: "home",
                    key: "service"
                }, 
                "Services"
            ),
            ce(
                "li",
                {
                    id: "home",
                    key: "blog"
                }, 
                "Blogs"
            ),
            ce(
                "li",
                {
                    id: "home",
                    key: "contact"
                }, 
                "Contact Us"
            ),
        ]
    )
    ]
)
//* const root = ReactDOM.createRoot(document.getElementById("root"));
//* root.render(header);

// now this code is a huge mess... we won't be able to understand anything and our code will get messy
// so, what the better way???? here enters the `JSX`, what is that?? 
// * JSX allows us to write html like syntax in JavaScript. 


//*  This is called react element or at the end, function object
const heading2 = (<h1 id="title" key={"OMG"}>This is header</h1>);
console.log(heading2);  //this gives me an object!


//*  React Components  (`Everything is a component in react!`)
//*      types: 1. Functional components        2. class-based components


//*  this is a react component aka, JS function
const HeadingX = () => (
    <h4>We made react element a functional component</h4>
);

const HeaderComponent2 = () => {
    return(
        <div>
            <h1>Functional Components</h1>
            <h2>Hello</h2>
        </div>
    );
}

//*  just use these {} to write any javaScript code!
var X = 10;
for(i = 0; i<=X; i++){
}

const HeaderComponent3 = () => (
        <div>
            everything we write in this div tag gets executed on the server!
            {/* Element inside React Component */}
            {/* We now how to add js in react, use {}, so, element is js object..  */}
            {heading2}
            {i} 
            <br/>
            {1+2}
            {console.log(i)}
            <HeadingX/>
            {/* OR,  {HeadingX()}   Bcoz, it is a function at the end*/}  
            <HeaderComponent2 />
            <h1>Functional Components</h1>
            <h2>Hello</h2>
        </div>
);

//* root.render(heading2); //for react elements
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent3/>);  //for react components
