
import React from 'react';
import {render} from 'react-dom';
import Navbar from './Components/Navbar';

class App extends React.Component {
        render() {
                return(
                        <div>
                                <Navbar items={7}/>
                        </div>
                );
        }
}

render(<App />, document.getElementById("app"));