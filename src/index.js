import ReactDOM from 'react-dom/client';

const sum = (a, b) => a + b
const hi = <h1>The result is {sum(5, 8)}</h1>

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(hi)