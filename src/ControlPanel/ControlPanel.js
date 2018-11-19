import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import store from '../Store';
// import SummaryStore from '../stores/SummaryStore';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        //flux 的用法
        // this.state = {
        //     summary: SummaryStore.getSummary()
        // }
        this.state = this.getOwnState();
    }

    componentDidMount() {
        // flux 的用法
        // SummaryStore.addChangeListener(this.onChange);
        // redux 的用法
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        // flux 的用法
        // SummaryStore.removeChangeListener(this.onChange);
        // redux的用法
        store.unsubscribe(this.onChange);
    }


    onChange() {
        // flux 的用法
        // let newSummary = SummaryStore.getSummary();
        // this.setState({
        //     summary: newSummary
        // })
        // redux 的用法
        this.setState(this.getOwnState());
    }

    getOwnState(){
        const state = store.getState();
        let sum = 0;
        for(const key in state){
            if(state.hasOwnProperty(key)){
                sum+=state[key];
            }
        }
        return {summary:sum}
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