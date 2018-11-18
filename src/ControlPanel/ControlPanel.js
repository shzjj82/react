import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import SummaryStore from '../stores/SummaryStore';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            summary: SummaryStore.getSummary()
        }
    }

    componentDidMount() {
        SummaryStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        SummaryStore.removeChangeListener(this.onChange);
    }


    onChange() {
        let newSummary = SummaryStore.getSummary();
        this.setState({
            summary: newSummary
        })
    }

    render() {
        return (
            <div>
                <Counter caption='First'></Counter>
                <Counter caption='Second' initValue={0}></Counter>
                <Counter caption='Third' initValue={0}></Counter>
                <div>{this.state.summary}</div>
            </div>
        )
    }
}