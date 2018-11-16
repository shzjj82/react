import React,{ Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
    /**
     * Creates an instance of Counter.
     * @param {object} props 传入值
     * @memberof Counter
     */
    constructor(props){
        super(props);

        this.state = {
            count:props.initValue
        }

        this.handleClick = this.onClickButton.bind(this,-1);
    }

    /**
     * 方法1 通过箭头函数讲this指向到Counter上
     * 方法2 通过bind(this,params);
     * @memberof Counter
     */
    onClickButton=(num)=>{
        this.setState({
            count:this.state.count + num
        })
    }

    render(){
        const {caption} = this.props;
        const buttonStyle = {padding:'10px',marginRight:'10px'};
        const WrapperStyle = {marginBottom:'10px'};
        return(
            <div style={WrapperStyle}> 
                <button style={buttonStyle} onClick={this.handleClick}>-</button>
                <button style={buttonStyle} onClick={()=>this.onClickButton(1)}>+</button>
                <span>{caption}</span> count: {this.state.count}
            </div>
        )
    }

}
// 类型判断 判断props的类型是否正确 isRequired 则表示必填项 （需要引入PropTypes);
Counter.propTypes ={
    caption:PropTypes.string.isRequired,
    initValue:PropTypes.number
}
// 默认值 当props不传入时 默认值设定 （为了更好的代码管理)
Counter.defaultProps = {
    initValue:10
}