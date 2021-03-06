import React, { Component } from 'react';

export default class ClickCounter extends Component {
    constructor(props) {
        super(props)
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        const CountStyle = { margin: '16px' }
        return (
            <div style={CountStyle}>
                <button onClick={this.onClickButton}>Click Me</button>
                <div>
                    Click Count:{this.state.count}
                </div>
            </div>
        )
    }
} 