- `Browser list` allows us to define the list of target browsers we want to support for our web project. We list all the browsers in package.json file, under browserslist key. When we define the list, it doesn't means that our project won't work on other browsers. It just means that all the features and functionalities will 100% work on these browsers and for others, there might be few things that won't work, but else we can access our project on any browser.


- `Polyfills` are code snippets that provide modern functionality for older browsers that lack support for certain JavaScript features or APIs. These features might be part of newer ECMAScript specifications or browser APIs that have been introduced in recent versions of web browsers. But, in React, we do not need to write code manually for polyfills, babel does that for us.


- `Babel` is a JavaScript compiler.
  Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code (or JSX) into a backwards compatible version of JavaScript in current and older browsers or environments.


- When we build our project (for production), we thought what it automatically removes our console.log's to, but no.. in dist folder check js file, there will be console.log's and we have to remove them. How?
  we need to configure babel and we need pacakage for that,
  i.e., [`babel-plugin-transform-remove-console`]
  installation:  npm install babel-plugin-transform-remove-console --save-dev /-D
  create a file, .babelrc and add the script to it (provided by npm).


- To avoid writing npx parcel index.html over and over,
  go to package.json, under scripts key add two more properties, "start" and "build"
  "start": "parcel foundation.html" (for decelopment)  
  "build": "parcel build ignition.html" (for production)

now all you have to do is, `npm start` and `npm build start`


- When we create elements using React.create... and we need child nodes
  <header>
  <logo></logo>
  <home></home>
  <contact></contact>
  </header>
  it better to use keys, {key: "home", id: "h"} in that object. Because react keeps track of keys not id (id is just for the html and css). Say, if I have to add a component before home, and if i dont use keys, react will have to render whole page and it will not be resourcefull. And in case of keys, it will only have to render that particular component.

example:
<ul>
    <li>Duke</li>
    <li>Villanova</li>
</ul>
<ul>
  <li>Connecticut</li>     //key:2014
  <li>Duke</li>            //key:2015
  <li>Villanova</li>       //key:2016
</ul>

Inserting an element at the beginning has worse performance. React will mutate every child instead of realizing it can keep the <li>Duke</li> and <li>Villanova</li> subtrees intact. This inefficiency can be a problem.

When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. React knows that the element with key '2014' is the new one, and the elements with the keys '2015' and '2016' have just moved.


- `JSX`
  <!--?   const element = <h1>Namaste JSX!</h1>   -->
    This funny tag syntax is neither a string nor HTML. 
    It is called JSX, and it is a syntax extension to JavaScript used primarily with React. JSX allows developers to write HTML-like code directly within JavaScript, making it easier to create and manipulate the DOM elements in React components.
    <!--! jsx is not html inside js... NO! that's a wrong statement... that piece of code <h1> is not html, it is a html like syntax, a syntax of some markup language  -->

    Well, now that we are writing Html like syntax in our javascript, try and console it.. This will give error... 
    Whyy??, we are allowed to write html like syntax in JavaScript, but our browesr's console it not accepting it.. 
    Now that's because.. our browser doesn't understands JSX.. 
    But, We have one more JS Compiler.. Babel
    Yes, Babel understands this code.. it know what `<` or `>` is. 


- How `JSX` Works? 
    Behind the scenes, 
    JSX is converted to regular javaScript code before executing, and that is done by Babel.

    <!--*  JSX code  -->
    const element = <div className="container">Hello, World!</div>;

    <!--*  Transformed JavaScript code  -->
    const element = React.createElement("div", { className: "container" }, "Hello, World!");

    Now, when this JavaScript code executes, it manipulates the HTML and adds that element inside the DOM. 
    <!--?  JSX => JavaScript (createElement) => HTML => DOM   -->


- JSX Features: 
    1. `Readibility`: JSX makes the code more readable and visually appealing, also making it easier to understand the component's layout and hierarchy.
    2. `Component based structure` 
    3. `Performance optimization`: JSX is often transpiled to optimized JavaScript code using tools like Babel.
    4. `Syntax error checking`: Since JSX resembles HTML, it can help identify syntax errors more quickly. 
    5. `Integration with JavaScript`: JSX itself is a syntax extension of JavaScript. This integration allows developers to embed JavaScript expressions and logic directly within JSX code using curly braces {}.
    6.  `Prevents injection attacks`: JSX automatically escapes any values embedded in JSX, preventing vulnerabilities like cross-site scripting (XSS). 
    7. `Developer Productivity`: allow developers to write code efficiently, leading to increased productivity in building user interfaces.
    8. `Community Adoption`: JSX has gained widespread adoption within the React community, resulting in an extensive collection of resources, tutorials, and libraries.
    9. `Syntactic sugar`


- JSX Elements: 
    An element is the smallest building block of a React application. It represents a plain `JavaScript object` that describes what should be rendered on the screen. Elements are lightweight and immutable.
    (React Element is returning an Object)

    1. HTML-Like Tags:
        const element = <div>Namaste React!</div>;

    2. Nested Elements (Children):
        const element = (
            <div>
                <h1>Hello, World!</h1>
                <p>Welcome to JSX.</p>
            </div>
        );

    3. Self-Closing Tags: 
        const element = <img src="example.jpg" alt="Example" />;

    4. Comments:
        const element = (
            <div>
                {/* This is a comment in JSX */}
                <h1>Hello, World!</h1>
            </div>
        );
    
    5. JavaScript Expression: 
        const name = 'Josh Perez';
        const element = <h1>Hello, {name}</h1>;
        * in these curly bracketts, we can add any js expression like: {2+2}, {console.log(x)} anything.


- React Components: 
    1. Class based components
    2. Functional Components

    - Functional Components
        Functional components are defined as JavaScript functions that take props as an argument and return a piece of JSX, or a react element, or a function. 
        Name of the component always starts with UpperCase.

        `Everything is a component in react!`
        If we have to write multiple lines to be returned in a component, we need to use ()and ; at the end.

        const App = () => {
            return (
                <div>
                    <h1>Functional Component</h1>
                    <h2>Says, Hello!</h2>
                </div>
            );
        };

        OR, 
        We don't need return statement instead encloase all the jsx in parehthesis `()`. 

        const App = () => (
            <div>
                <h1>Functional Component</h1>
                <h2>Says, Hello!</h2>
            </div>
        );

        - Include elements in components i.e., JS Objects
            const App = () => (
                <div>
                    {element}
                    <h1>Functional Component</h1>
                    <h2>Says, Hello!</h2>
                </div>
            );

        - Include component in components i.e., JS Function
            const App1 = () => (
                <div>
                    {/* Anything inside the component i.e., div tag, will be rendered on the browser, Obviously not this Comment. */}
                    {element}
                    <App /> 
                    <h1>Functional Component</h1>
                    <h2>Says, Hello!</h2>
                </div>
            );
            It is not compulsory to use those round bracketts, we use them when we have to write multiple lines in our return statement. 
            <!-- * This is known as `component composition` i.e., nested components -->
            <!--? For other syntax like comments, function inside components etc.. are same as JSX Element -->


<!-- 
?    to render react elements we use, 
*    root.render(Something);

?    to render react components we use, 
*    root.render(<Something />);
 -->


- JSX won't work without babel. Babel comes along with a bundler. Even if we don't use parcel, We will need to install it seperately.   
Even if we use, create-react-app, babel comes along with webpack. 