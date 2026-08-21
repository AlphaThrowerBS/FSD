import React from "react";
import ReactDOM from "react-dom/client";

function Book(){
    return (
        <div>
            <img src="" width="100px" height="100px"></img>
            <h2>Price:475</h2>
            <button>AddToCart</button>
        </div>
    )
}
function App(){
    return (
        <div>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )
}

const parent=document.getElementById("root");

const root = ReactDOM.createRoot(parent);

root.render(<App />);