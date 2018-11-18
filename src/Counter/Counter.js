import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CounterStore from "../stores/CounterStore";
import * as Actions from '../Actions';
export default class Counter extends Component {
    /**
     * Creates an instance of Counter.
     * @param {object} props 传入值
     * @memberof Counter
     */
    constructor(props) {
        super(props);



        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        //通过store取值
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }

    //绑定监听事件
    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    //移除监听事件
    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({
            count: newCount
        })
    }


    onClickIncrementButton() {
        //通过actions更改对应的值
        Actions.increment(this.props.caption);
    }

    onClickDecrementButton() {
        Actions.decrement(this.props.caption);
    }

    /**
     * 方法1 通过箭头函数讲this指向到Counter上
     * 方法2 通过bind(this,params);
     * @memberof Counter
     */
    onClickButton = (num) => {
        this.setState({
            count: this.state.count + num
        })
    }

    render() {
        const { caption } = this.props;
        const buttonStyle = { padding: '10px', marginRight: '10px' };
        const WrapperStyle = { marginBottom: '10px' };
        return (
            <div style={WrapperStyle}>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>-</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>+</button>
                <span>{caption}</span> count: {this.state.count}
            </div>
        )
    }

}
// 类型判断 判断props的类型是否正确 isRequired 则表示必填项 （需要引入PropTypes);
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
}
// 默认值 当props不传入时 默认值设定 （为了更好的代码管理)
Counter.defaultProps = {
    initValue: 10
}