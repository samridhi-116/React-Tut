<!--&-------------------------Day-4------------------------------------------------------------------------->

- JSX comments is normal like comments in JavaScript but, just enclose them in {}.

- Using JSX is not mandatory, we can use that React.createElement (it's just upto us, if we want to make our code messy). Even using ES6 is not compulsory. 

- We can use React in just single component too.. say footer, then what we'll do is, put footer inside the root element and use react in it. Rest of the website works same.

- We know that, for any piece of JSX what we write, there can only be one parent element. 
    When we make our component, we enclose all other entities in a div tag or any other tag, here div acts as a parent element. But Do we need this extra div?? No.
    
- To avoid that, We have something called, `React.Fragment`
    <React.Fragment></React.Fragment> OR, <> Short Hand (Empty Tags) </>
    It is exported by react. We can use nested fragments. 
    We can't give styling to our react fragment, for that we'll need named tags. 

- In-line styling in react
    const StyleObj = {
        backgroundColor: Red,
    };

    const element = () => (
        <div style={StyleObj}>
            Hello
        </div>
    );

FoodOrdering Website. 
- First we designed the app layout, and all the features to include
    (Config driven UI)
    /* 
            Header
                - Logo
                - NavBar
                - Cart
                - Sign in/up
            Body
                - Search bar
                - Restraunt Card
                    - Image
                    - Name
                    - Rating
                    - Cusines
                    - Area
            Footer
                - Links
                - CopyRights
    */

- Create a component for header (Look header.js file)
- Coming on to body, 

    we need a resturant details card. including all the above mentioned features. 
    so, we created a component for it, 

    const RestrauntCard = () => (
        <>
            <img src=""/>
            <h2> Name </h2>
            <h5> Rating <h5>
            <h6> Cuisines </h6>
            <h6> Area </h6>
        </>
    );

    Seeing a problem here?? 
    Are we going to hard code all the data for all the restraunts?? No righttt
    So, we need to make our card dynamic.

- I'll make a restraunt object, and our card will fetch data from it. 
Data for Burger King

        const BK = {
            Name: "Burger King",
            Rating: "4.2",
            Cuisines: ["Burger", "American"],
            Image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/z4b7yzchjbyoidimzlg1"
            Area: "Sector 9"
        }

        const RestrauntCard = () => (
            <>
                <img src={BK.Image}/>
                <h2> {BK.Name} </h2>
                <h5> {BK.Rating} <h5>
                <h6> {BK.Cuisines} </h6>
                <h6> {BK.Area} </h6>
            </>
        );

        Okay, so data we'll have to write, but still we'll have to hardcode each restarunt card. And we'll have 500+ restraunts in an area.. Still not right method. 

- Okay, so now, what if we get all the restarunts data in (RestrauntList), and access it something like, 

        const RestrauntCard = () => (
            <>
                <img src={RestrauntList.info[0].Image}/>
                <h2> {RestrauntList.info[0].Name} </h2>
                <h5> {RestrauntList.info[0].Rating} <h5>
                <h6> {RestrauntList.info[0].Cuisines} </h6>
                <h6> {RestrauntList.info[0].Area} </h6>
            </>
        );

        <!-- All of there showing same data.. Again -->
        const Body = () => {
        return (
                <>RestrauntCard</>
                <>RestrauntCard</>
                <>RestrauntCard</>
            )
        }

- Now same data is displayed for all those three cards.
Now, here comes something called props. 

- `Props` (Properties), is object argument with data and returns a React element. 
    - They allow you to send information and configuration from one component to another in a one-way data flow. Props are read-only and cannot be modified by the child component that receives them, ensuring that data flows in a predictable manner.

            const RestrauntCard = (prop) => (
                <>
                    <img src={prop.restraunt.Image} />
                    <h2> {prop.restraunt.Name} </h2>
                    <h5> {prop.restraunt.Rating} <h5>
                    <h6> {prop.restraunt.Cuisines} </h6>
                    <h6> {prop.restraunt.Area} </h6>
                </>
            );

            const Body = () => {
            return (
                    <>RestrauntCard restraunt = {RestrauntList[0].info} </>
                    <>RestrauntCard restraunt = {RestrauntList[1].info} </>
                    <>RestrauntCard restraunt = {RestrauntList[2].info} </>
                )
            }

    - Here, 
        <!--^  In functional components, arguments that we pass are called props. -->
        <!--~  restraunt = {RestrauntList.info[0]}   //This is called props   -->
        acts as a argument object, and is recieved by prop (parameter) 
        This prop recieves the props. 

- Now, further we need to do 2 things, optimise it and resolve the hard coded Body elements. 

Okay, we can optimise our cards, by destructuring our props. 
Here, 

        const RestrauntCard = ({restraunt}) => {        
<!--^       const {name, cuisines, avgRating, cloudinaryImageId, areaName} = restraunt.info;          -->
            return (
                <div className="card">
                    <img src={cloudinaryImageId} />
                    <h3>{name}</h3>
                    <h5>{avgRating}</h5>
                    <h6>{cuisines}</h6>
                    <h6>{areaName}</h6>   
                </div>
            )
        };
        const Body = () => {
        return (
                <>RestrauntCard restraunt = {RestrauntList[0]} </>
                <>RestrauntCard restraunt = {RestrauntList[1]} </>
                <>RestrauntCard restraunt = {RestrauntList[2]} </>
            )
        }

<!--^ and futher we can destructure this, using all these properties directly inside our {}  -->

    const RestrauntCard = ({name, cuisines, avgRating, cloudinaryImageId, areaName}) => {        
            return (
                <div className="card">
                    <img src={cloudinaryImageId} />
                    <h3>{name}</h3>
                    <h5>{avgRating}</h5>
                    <h6>{cuisines}</h6>
                    <h6>{areaName}</h6>   
                </div>
            )
        };
        const Body = () => {
        return (
            <!--? This one will work, bcoz we are targeting those particular properties of a object. -->
                <> RestrauntCard
                    name = {RestrauntList[0].info.name} 
                    avgRating = {RestrauntList[0].info.avgRating} 
                    cuisines = {RestrauntList[0].info.cuisines} 
                </>
            <!--? And, this one is not gonna work.. What extactly we need? name or cuisine or everything, We don't know.. no one specified  -->
                <> RestrauntCard restraunt = {RestrauntList[1].info} </>
                <> RestrauntCard restraunt = {RestrauntList[2].info} </>
            )
        }

Now, We know that our, RestrauntList.data has all the properties, and we want to pass all those properties as props.. 
Now, rather than writing all those properties individually, 
(guess, what's the JS method to get all the data at once?? Yes, Spread Operator)    

        <> RestrauntCard
            {...RestrauntList[0].info}
        </>

- But still, We can't hard code for 500+ restraunts. 
    So, to optimise it, we need to iterate over all the objects in our list and then, print each Restraunt card.
    So, we can use either a for loop, or for each function, or map method

    Well, in functional programming, It's better to use maping, its a better practice. 
    So, 
        const Body = () => {
        return (
                <>
                    {
                        RestrauntList.map(
                            (restraunt) => {...restraunt[0].info}
                        )
                    }
                </>
                <!--? Here, we used no react, It's a pure javascript map method  -->
            )
        }


- `Virtual DOM`: 
    It is the representation of the actual DOM with us. 
    - The Virtual DOM is an in-memory representation of the real DOM. It is a lightweight copy of the actual DOM that React maintains. Changes made to the Virtual DOM are not immediately reflected on the web page.
    -  When changes occur in a React application, React creates a Virtual DOM representation of the UI based on the updates.
    - React then compares this Virtual DOM with the Actual DOM (before the changes occurred) using a process called "reconciliation" or "diffing."

- `Reconciliation`: 
    It is the process of efficiently updating the actual DOM to reflect changes in the Virtual DOM. 
    When state or props change in a React component, a new Virtual DOM representation is created. React then performs a process called "reconciliation" or "diffing" to 
<!--? determine the minimum number of changes needed to update the real DOM to match the new Virtual DOM. -->
    - React generates a "diff" that contains the specific changes needed to update the real DOM to match the Virtual DOM.
    - The updates are collected and performed in batches to minimize the number of actual DOM manipulations and increase performance.
    - Once all the changes are determined, React applies the updates to the real DOM in a process known as the "reconciliation commit."

- `Batching`: 
    When you make changes to a React component, React will batch those changes together and perform the updates in one go. This is known as "batched updates" or "batching." 
    The goal is to minimize the number of renders and optimize the update process for better performance.


- `Shadow DOM`: IDK what this is, but react docs says, 
    The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components.
Also, 
    That enables encapsulation and scoping of styles and markup within web components. It allows developers to create self-contained, isolated components with their own styles and DOM subtree, preventing them from interfering with or being affected by the styles and DOM of the surrounding web page.


- `React Fiber`: 
    Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
    The term "Fiber" refers to the data structure used in the implementation. The Fiber architecture employs a more flexible, asynchronous, and incremental approach. It allows React to work on tasks in smaller units and pause, abort, or prioritize them, enabling better control over the rendering process and responsiveness.

- `Keys` and `indices`: 
    Keys concept we already read in Foundation, Here's a little more. 
    - When all the siblings have different tags, then we do not need to assign them keys. (in case of same tags we, do).
    - We should never use our indices as our keys. Not a good practice

    - No Key (Not acceptable) <<<<< Index as key (Last option) << Unique Key (best practice)

- Config driven UI: 
    config is nothing but a JS object or a JSON data, 
    config driven UI refers to the huge data (maybe json data) sent by backend or hardcoded as js object.
    Okay, so that restrauntList, was a Swiggy data, that we used to create our restraunt cards. 

[--------------------------------------------------------------------------------------------------------------]

<!--&---------------------Day-5---------------------------------------------------------------------->

- Folder Structuring: 
    Toh isme we organized our files and folders, We had 3 major components, header body and footer, and we created different files for them, in Components folder, and Restraunt Card was also a major component. 
    and in config.js file, we kept all the elements and are to be used repeatedly. And App.js is out main js file.

- Import Export Methods: 
    Named Export and Default Export 
    
    - Named Export: used to export elements. In a file, if we have to export just a particular element, 
        like, 
        
            export const RestrauntList= [ ... ];

        and is imported like, 

            import { restrauntList } from "...";
            import { RList } from "...";  <!-- Yes, we can change the name also -->
            import { restrauntList as RList } from "...";


    - Default export: used to export the components.

            export default Header;

        To import, 

            import Header from "..."; 
            <!-- here we do not use curly parenthesis -->


- React uses one way data binding. We can't manipulate our variables or components. 
    and in react, it is not preffered to create variables like in javaScript    
        let value = "Something"; // Not preffered!!
        We can't manipulate this variable value. 

    So, what if we have to create a slider, or timer or search bar? 
    How to create react variables aka, State variable? 


- `React State`: State is a fundamental concept that allows you to manage and maintain data within a component. State represents the dynamic data that can change over time, such as user interactions, data fetched from an API, or any other data that affects the component's behavior and appearance.

State is used to create interactive and dynamic user interfaces because when the state changes, React automatically re-renders the component with the updated data, reflecting the changes in the user interface.


- `State Variables`: State variable are used to store and manage dynamic data within a component.
    (In Class-based components, you can define and manage state using the `this.state object`)
    In functional components, we can have state varibales using hooks. 
    

- `React Hooks`: 
        
        Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes. 

Before the introduction of hooks, state management and other React features were primarily achieved using class components, which could be more verbose and harder to maintain, especially as components grew in complexity.
With React Hooks, developers can use stateful logic and other React features directly within functional components, making the code more concise, readable, and easier to manage.

It is nothing but a nomral JS function (and we can see it like, it has different methods (aka, hooks), like useState(), useEffect()  etc...)


- `useState Hook`: 
    It is used to add state to functional components. It allows you to create and manage state variables without the need for class components. The useState hook returns an array with two elements: 
    the state variable and a function to update that variable.


    We add useState Hook in our page, by importing it from the react module. 
    In react, we declare local state variable like, 

        const [variable] = useState("DefaultVal"); 
        <!--? here, varivle is our state varibale, and DefaultVal, is the Default Value that will be displayed., UseState hook returns an array, use first element is the local variable and second element is the function to update that varibale. -->

        After destructuring, 
            const [varible, setVariable] = useState("DefaultVal"); 
        i.e., [localVariable, Function to Update the localVariable] = useState("Default Value")
        <!--? Use State manages the state and make updates to that particular variable. -->

    e.g., 

        import React, { useState } from 'react'; //Here we are importing our hook

        const ExampleComponent = () => {
        // Declare a state variable called "count" with an initial value of 0
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>Count: {count} </p>
                <button onClick={() => {
                        setCount(count + 1);
                    };
                }>Increment</button>
            </div>
        );
        };

- At the end, useState() is also a function, That takes just one argumnet, i.e., initial value (or default value)
    <!--* two-way binding in react is possible using Hooks, we can chnage and update our values, our react components an be mutable using hooks  -->


<!--&----------------------------------Day-6------------------------------------------------------------------->

- What is a `Microservice`?

- `SPA`:
    SPA stands for "Single Page Application." It is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. 

    - Dynamic Content Loading
    - Routing
    - Smooth UX
    - Faster
    - API Driven

<!--&--------------------------------------------------------------------------------------------------------->
- created custom hooks... useRestaurantMenu and useRestaurants. Now, we already had logics for those
- now we making our own hook from scratch... Showing the internet connection. 
    that we are connected to internet or not.
    

