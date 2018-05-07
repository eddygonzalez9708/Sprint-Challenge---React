# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React Js is a JavaScript library that enables developers to build large scale web applications rapidly. React JS differs from other JavaScript frameworks because it is not a collection of libraries and tools. However, React JS is one tool in which it's sole purpose is to render HTML and CSS to the DOM. 

It is a UI Component Library 

Performance 

Interactice users making real time changes


2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React Component Lifecycle controls what occurs when a component is changed or updated by the user or API. The three methods that are part of the lifecycle include: 

goes throught mounting, updating phase, unmounting/destroying phase 

    I. render() - is a method that takes place during the mounting/updating phases and returns some JSX code (e.g. DOM element, a boolean, and an array of DOM elements) to the DOM when it is called by setState(). 

    II. componentDidMount() - is a method that takes place during the mouting phase and it gets called as soon as the virtual DOM has confirmed what the render() method will return and what elements will be mounted up. This method is a great place to fetch data from external servers. 

    III. 


3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

class - java class that extends the base class and contains the life cycle methods

function - takes in data and displays it to the page. 

4. Briefly describe PropTypes and what we use them for when building react applications.

proptypes for checking your data when pass down as props components. For detecting bugs. 