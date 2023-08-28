- What is `JSX`?
  const element = <h1>Namaste JSX!</h1>
  JSX allows developers to write HTML-like code directly within JavaScript, making it easier to create and manipulate the DOM elements in React components.
  JSX is converted to regular javaScript code before executing, and that is done by Babel. Now, when this JavaScript code executes, it manipulates the HTML and adds that element to the DOM. 


- Superpowers of JSX?
1. Readibility
2. Component based structure
3. Developer Productivity
4. Prevents injection attacks
5. Syntax error checking


- Role of `type` attribute in script tag? What options can I use there?
The type attribute of the <script> element indicates the type of script represented by the element: 
a classic script, a JavaScript module, an import map, or a data block.

1. type="text/javascript" (deprecated): This was historically used to explicitly specify that the content of the script is JavaScript. (no longer needed for html:5)

2. type="module": This is used to indicate that the script is a JavaScript module. Modules allow you to use the import and export statements for better code organization and modularity.


- {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX. 

    - {TitleComponent}: When we render any React element inside any component, we use this. 
    - {<TitleComponent/>}: When we render any React component inside any other component, we use this. 
    - {<TitleComponent></TitleComponent>}:  this syntax might be confusing because it looks like an opening and closing tag for the component, but it's actually equivalent to the self-closing tag version {<TitleComponent/>}. 