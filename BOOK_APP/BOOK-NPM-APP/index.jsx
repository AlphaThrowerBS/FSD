function Book(){
    return (
        <div>
            <img src="" width="100px" height="100px"/>
            <h2>Price: $500</h2>
            <button>Add to Cart</button>
        </div>
    )
}
function App(){
    return(
        <div>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>)