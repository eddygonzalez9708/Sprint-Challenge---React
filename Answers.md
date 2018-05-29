# Answers

1. What is React JS? How does it differ from other JavaScript frameworks?

React JS is a JavaScript UI Component library for building user interfaces. It enables developers to build large scale web applications rapidly, organize code into separate component files, and improve performance of a web application especially when many users are interacting with it in real time. React JS differs from JavaScript frameworks because it is not a collection of libraries and tools. However, React JS is a single tool in which its sole purpose is to offload work to the virtual DOM and render HTML and CSS to the DOM whenever a change is made. 

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

The React Component Lifecycle controls what will occur when a component is mounted, updated or unmounted (destroyed). The three methods that are part of the lifecycle include: 

    I. render() - it is a method that takes place during the mounting and/or updating phases and will return some JSX code (e.g. DOM element, a Boolean, and an array of DOM elements) to the DOM. 

    II. componentDidMount() - it is a method that takes place during the mounting phase and it gets called as soon as the virtual DOM has confirmed what the render() method will return and what elements will be mounted up. This method is a great place to fetch data from external servers. 

    III. setState() - it is a method that will update our data and will recall the render() method to display any new changes. 

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component is a JavaScript class that extends the base class as well as contains the life cycle methods and it is concerned with the state object. A Functional/Presentational component only receives data and displays it to the web page. Therefore, it is not concerned with the state object. 

4. Briefly describe PropTypes and what we use them for when building React applications.

PropTypes allows developers to check their data when it is passed down as props to other components. As a result, it is useful for detecting bugs and protecting developers from themselves. 