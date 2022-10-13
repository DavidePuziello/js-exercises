import ReactDOM from 'react-dom/client';

function sayHello(name) {
    return <h1>Hello, {name}!</h1>
}

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(sayHello("World"))