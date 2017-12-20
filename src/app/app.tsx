import * as React from 'react';
import * as ReactDOM from 'react-dom';
let Pluto = require('../ts/Introduction');

class App extends React.Component {
    render() {
        return (
            <Pluto.Solutions.Table />
        )
    }
}

ReactDOM.render(
    <App />,
    Pluto.Solutions.Root
)