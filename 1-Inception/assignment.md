- why we create `root`?
we run react inside root, all our react elements are inside root
bcoz react wants to know where we have to put our stuff (that h1 tag and all)
div and h1 tags are children of that root element. we can have normal elements too like I included header and footer, they are not the part of react component. To make them react element we have to include them in the root element. 

//----------------------------------------------------------------------------------------------------------------

- can we have multiple roots in an app?
umm... No, that create.root and render we only do once in out app... it will store all the other elements
if we try to have render multiple times, it will keep on rewriting the prev render.. so our browser just considers only one render. 
and there is only one root element that contains other elements and tags. 

//----------------------------------------------------------------------------------------------------------------

- What is `Emmet`?
so that shortcut suggestions that we use in our vs code like html:5, it will write all the basic snippet (structured code format) for us, is emmet. it is built in in vs code so no need to install.

//----------------------------------------------------------------------------------------------------------------

- Difference between a `Library` and `Framework`?
A library is a collection of pre-written code and functionalities that can be reused by developers to perform specific tasks or operations.
React is a library, meta developers wrote that certain piece of code and functionalities that we use to create our applications. 
A framework is a more comprehensive and opinionated software environment that provides a structured architecture for building applications.
Angular is a framework... 

//----------------------------------------------------------------------------------------------------------------

- What is `CDN`? Why do we use it?
CDN stands for Content Delivery Network. It is a geographically distributed network of servers that work together to deliver web content, such as images, videos, stylesheets, scripts, and other files, to users based on their geographic location. The primary purpose of a CDN is to improve the performance, reliability, and efficiency of delivering content to end-users.
For carousels, we add certains links (the cdn links) to our code, that provide us the built-in javaScript and CSS of certain functionality. 

//----------------------------------------------------------------------------------------------------------------

- Why is React known as React?

The name "React" reflects the library's core principle of reacting to changes in data and efficiently updating the user interface.
this library was meant to be reactive, it efficiently updates and renders components when there are changes to the underlying data or state. Instead of manually updating the DOM whenever data changes, React intelligently determines what parts of the DOM need to be updated and performs those updates efficiently.

//----------------------------------------------------------------------------------------------------------------

- What is `cross-origin` in script tag?
This attribute is primarily used when loading scripts from a different domain (i.e., a different origin) than the one serving the HTML file.
we included react through CDN links, we had cross-origin specification there, it basically is used to control how the browser handles cross-origin requests when loading external JavaScript files. 

in the CDN links used to include react, we wrote
crossorigin src = "..." 
here we did not specify any value of cross origin, so it behaves as if the crossorigin attribute was not present.

crossorigin can have 3 possible values: 
anonymous 
use-credentials
'' (empty string)

CORS:
CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to control how web pages on one domain can request resources from another domain.
browser includes origin header in the request, and the server responds to the specific cors header. 

SOP:
The Same-Origin Policy is a fundamental security measure that prevents web pages from making cross-origin requests by default. Tt restricts web pages from making XMLHttpRequest (XHR) or Fetch API requests to a different domain than the one that served the web page.

//----------------------------------------------------------------------------------------------------------------

- What is diference between `React` and `ReactDOM`?

React is the core library that provides the foundation for building UI components and managing their state, while ReactDOM is responsible for rendering those React components into the DOM, updating the view, and handling interactions with the actual browser environment.

//----------------------------------------------------------------------------------------------------------------

- What is difference between `react.development.js` and `react.production.js` files via CDN?

while importing react through CDN link.. we saw that there were 2 set of links.. 
the first one that we included was for development purposes... It contains additional warnings, debugging information, and helpful error messages in the console, which aids developers in identifying potential issues during the development process.
and the other one the min.js one is for production purposes, it is more optimized and the file size is less... It is minified, meaning that unnecessary whitespace, comments, and debug code have been removed to reduce its size, making it smaller and faster to load on the client's browser.

//----------------------------------------------------------------------------------------------------------------

- React elements are immutable. Once you create an element, you can’t change its children or attributes.
React follows a unidirectional data flow, where the data flows from parent components to child components, and any changes to the data result in the creation of new elements rather than modifying existing elements.
