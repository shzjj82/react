import * as ActionTypes from './ActionTypes';
import AppDispather from './AppDispatcher';
// 为Actions添加事件 给与事件的类型已经对应的属性
export const increment = (counterCaption) => {
    AppDispather.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    })
}
export const decrement = (counterCaption) => {
    AppDispather.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    })
}