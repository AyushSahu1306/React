import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => Object  => HTMLElement (render)
// const parent=React.createElement(
// "div",
// {id:"parent"},
// React.createElement(
//     "div",
//     {id:"Child"},
//     [React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]
// )
// );


// const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React!");


//React Element
const elem=<span>React Element </span>
const jsxheading=(
    <h1 className="heading2" tabIndex="1">
        {elem}
        <br></br>
    Hello world using jsx</h1>
);//for multiple line(jsx)


//React Component

// const HeadingComponent=()=> (
//    <h1 className="heading">Functional Components</h1>
// );
const HeadingComponent2=()=>(
        <h1 className="heading"> Heading Functional Component</h1>
);
const number=1000;
const HeadingComponent=()=> {
return (
    <div id="container">  
    <h2>{number+1}</h2> 
    {jsxheading}
    <HeadingComponent2 />
    <HeadingComponent2></HeadingComponent2>
    {HeadingComponent2()}
    <h1 className="heading">Functional Components</h1>
    </div>
    );
}




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

