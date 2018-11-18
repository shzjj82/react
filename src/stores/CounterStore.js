// 通过为Store绑定相关联事件及设置Store的初始属性
import AppDispatcher from "../AppDispatcher";
import * as ActionTypes from "../ActionTypes";
import { EventEmitter } from 'events';
const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 30
}

// 为Store添加事件
const CounterStore = Object.assign({}, EventEmitter.prototype, {
    //取当前值
    getCounterValues: function (params) {
        return counterValues;
    },

    //发送变化事件
    emitChange: function (params) {
        this.emit("CHANGE_EVENT")
    },

    //监听事件后执行callback
    addChangeListener: function (callback) {
        this.on("CHANGE_EVENT", callback);
    },

    //移除响应的监听事件
    removeChangeListener: function (callback) {
        this.removeListener("CHANGE_EVENT", callback)
    }

})

// 每个Store都需要注册到AppDispatcher中才可以正常使用
// 注册后返回一个token值
// 根据行为Aciton的行为去执行方法 并通知给监听事件
CounterStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCaption]--;
        CounterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT) {
        counterValues[action.counterCaption]++;
        CounterStore.emitChange();
    }

})

export default CounterStore;