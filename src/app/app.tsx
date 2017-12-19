import * as React from 'react';
import * as ReactDOM from 'react-dom';
let root = document.getElementById('root');

class HelloWorld extends React.Component {
    render() {
        return (
            <h2>Hello World! I came from TypeScript Development Server !</h2>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <HelloWorld />
        )
    }
}

ReactDOM.render(
    <App />,
    root
)