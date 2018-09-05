import React, {Component} from "react";
import { toast } from 'react-toastify';

class App extends Component {

    notify = () => toast("Wow so easy !");

    render() {
        return (
            <div>
                test first page.
                <button onClick={this.notify}>Notify !</button>
            </div>
        );
    }
}

export default App;