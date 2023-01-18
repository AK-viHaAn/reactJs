import React from "react";
import './index.css'


class CountComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            Count: 0
        };
    }

    incrementCount() {
        this.setState({
            Count: this.state.Count + 1
        })
    }

    decrementCount() {
        this.setState({
            Count: this.state.Count - 1
        })
    }


    ChangeInputValue(value) {
        this.setState({
            count: value
        })
    }

    render() {
        return <div className="countNumber">
            <div >
                <h1>Increment and Decrement</h1>
                <p>Number: {this.state.Count}</p>
               

                <button onClick={() => { this.decrementCount(); }}>- Decrement</button>
                <button onClick={() => { this.incrementCount(); }}>+ Increment</button>
                <div className="count-type">
                    {this.state.Count % 2 === 1 && <span>Value Type: Odd</span>}
                    {this.state.Count % 2 === 0 && <span>Value Type: Even</span>}
                </div>
            </div>
            <div className="nametag">
                <p> Designed By: Anand Kumar</p>
                <p><a href="https://github.com/AK-viHaAn">Our Website</a></p>
            </div>
        </div>
    }
}
export default CountComponent;