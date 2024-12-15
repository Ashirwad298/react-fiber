let rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

let counterName = 'one';

const rerender = ()=> {
    console.log('rerender')
    counterName = 'two';
    root.render(React.createElement(App));
}

function App() {
    return (
        <article>
            {counterName =='one'? <Counter name={counterName}/>: <Counter2 name={counterName}/>}
        </article>
    )
}

const Counter = ({name})=>{
    return <section>
        <h1>Counter</h1>
        <h2>Counter  {name}</h2>
        <span>how many times clicked : 1</span>
    </section>
}


const Counter2 = ({name})=>{
    return <section>
        <h1>Counter</h1>
        <h2>Counter {name}</h2>
        <span>times clicked: 1</span>
    </section>
}