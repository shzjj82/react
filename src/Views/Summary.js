import React, { Component }from 'react';
import PropTypes from 'prop-types';
import store from '../Redux/Store.js';


class Summary extends Component {

    static propTypes = {
        sum: PropTypes.number
    };
    

    static defaultProps={
        summary:0   
    }

    render() {
      const sum = this.props.summary;
      return (
        <div>Total Count: {sum}</div>
      );
    }
  }


export default class SummaryContainer extends Component {
    constructor(){
        super(...arguments);
        

        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }



    getOwnState(){
        const state  = store.getState();
        var sum  = 0;
        for(let key in state ){
            if(state.hasOwnProperty(key)){
                sum += state[key]
            }
        }
        return {summary:sum}
    }

    onChange = () =>{
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }

    render(){
        return (<Summary summary={this.state.summary}></Summary>)
    }
}
