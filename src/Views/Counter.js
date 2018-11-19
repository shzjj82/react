import React, { Component} from 'react';
import PropTypes from 'prop-types';
import store from '../Redux/Store';
import * as Action from '../Redux/Actions';
import {connect} from 'react-redux';
// import CounterStore from "../stores/CounterStore";
// import * as Actions from '../Actions';

const buttonStyle = {
    margin: '10px'
};

function Counter({caption, onIncrement, onDecrement, count}) {
    return (
      <div>
        <button style={buttonStyle} onClick={onIncrement}>+</button>
        <button style={buttonStyle} onClick={onDecrement}>-</button>
        <span>{caption} count: {count}</span>
      </div>
    );
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};


function mapState (state,ownProps){
    return {
        count :state[ownProps.caption]
    }
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        onIncrement:()=>{
            dispatch(Action.increment(ownProps.caption));
        },
        onDecrement:()=>{
            dispatch(Action.decrement(ownProps.caption));
        }
    }
}

export default connect(mapState,mapDispatchToProps)(Counter);


// // 只负责渲染 展示页面
// class Counter extends Component{
//     static propTypes = {
//         caption: PropTypes.string.isRequired,
//         onIncrement: PropTypes.func.isRequired,
//         onDecrement: PropTypes.func.isRequired,
//         initValue: PropTypes.number.isRequired
//     }

//     static defaultProps = {
//         initValue: 0
//     }

//     render(){
//         const { caption,onIncrement,onDecrement,count } =this.props;
//         return (
//             <div>
//                 <button style={buttonStyle} onClick={onIncrement}>+</button>
//                 <button style={buttonStyle} onClick={onDecrement}>-</button>
//                 <span>{caption} count: {count}</span> 
//             </div>
//         )
//     }
// }

// // 负责处理与store之间的通信关系
// export default class CounterContainer extends Component {
//     /**
//      * Creates an instance of Counter.
//      * @param {object} props 传入值
//      * @memberof Counter
//      */
//     constructor() {
//         super(...arguments);
//         this.onChange = this.onChange.bind(this);
//         this.getOwnState = this.getOwnState.bind(this);
//         this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
//         this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
//         //通过store取值 
//         // flux 的用法
//         // this.state = {
//         //     count: CounterStore.getCounterValues()[props.caption]
//         // }
//         this.state = this.getOwnState();
//     }

//     //绑定监听事件
//     componentDidMount() {
//         //flux 的 用法
//         // CounterStore.addChangeListener(this.onChange);
//         //redux 的用法
//         store.subscribe(this.onChange);
//     }

//     //移除监听事件
//     componentWillUnmount() {
//         // flux 的用法
//         // CounterStore.removeChangeListener(this.onChange);
//         // redux的用法
//         store.unsubscribe(this.onChange);
//     }

//     onChange() {
       
//         // flux 的用法
//         // const newCount = CounterStore.getCounterValues()[this.props.caption];
//         // this.setState({
//         //     count: newCount
//         // })
//         // redux 的
//         this.setState(this.getOwnState());
//     }

//     getOwnState(){
//         // redux 的用法
//         return {
//             count:store.getState()[this.props.caption]
//         }
//     }

//     onClickIncrementButton() {
//         //通过actions更改对应的值
//         // flux 的用法
//         // Actions.increment(this.props.caption);
//         // redux 的用法
//         store.dispatch(Action.increment(this.props.caption));
//     }

//     onClickDecrementButton() {
//         //flux 的用法
//         // Actions.decrement(this.props.caption);
//         // redux 的用法
//         store.dispatch(Action.decrement(this.props.caption));
//     }

//     /**
//      * 方法1 通过箭头函数讲this指向到Counter上
//      * 方法2 通过bind(this,params);
//      * @memberof Counter
//      */
//     onClickButton = (num) => {
//         this.setState({
//             count: this.state.count + num
//         })
//     }

//     render() {
//         const { caption } = this.props;
//         return <Counter caption={this.props.caption} onIncrement={this.onClickIncrementButton} onDecrement={this.onClickDecrementButton} count={this.state.count}></Counter>
//     }

// }

