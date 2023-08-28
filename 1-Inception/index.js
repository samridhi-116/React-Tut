//* the create react element method takes 3 parameters, the tag name (that we want to create), an empty object, the data we want to insert in the tag. 
// okay so, we may have other elements inside that react element, so how do we get it? we get those elements through this empty object!
//react stores these 3 parameters in the form of objects. these parameters go to that react developer code, and makes an object out of it. 
const heading = React.createElement("h1", { 
    id:"title",
    class: "something"
}, 
// in this object we pass our props...
//everything we pass in here goes to that div element inside root
//okay something happened, console mein mera jo h1 tag tha usko yeh id mil gayi.. named title! and a class named something!
"Namaste React!");

const heading1 = React.createElement("h2", {id:"title1"}, "This is heading 1");
const heading2 = React.createElement("h3", {id:"title2"}, "This is heading 2");
const container = React.createElement("div", {id:"container"}, [heading, heading1, heading2]);
//so, we wanted to add 2 h1 tags in our div, and we know that third component takes the input we want to put inside our element.... in our case we have multiple elements, so we do that through an array

//* LMAO I thought it will return something like this, <h1>Namaste React!</h1>
//but noo it returns an object, react element is nothing but an object.
const root = ReactDOM.createRoot(document.getElementById("root"));
// here we created a root using reactDOM, and everything we render goes to this root (yes, wo DOM tree vala root, baki sbb uske child nodes hai and stuff)

// root.render(heading);
// root.render(heading1);
// root.render(heading2); this will over write the heading 1 and similarly it will overwrite heading

root.render(container);
//passing the react element inside the root element