import React,{ Component } from 'react';
import Counter from '../Counter/Counter';

export default class ControlPanel extends Component{
    render(){
        return (
            <div>
                <Counter caption='First'></Counter>
                <Counter caption='Second' initValue={0}></Counter>
                <Counter caption='Third' initValue={0}></Counter>
            </div>
        )
    }
}