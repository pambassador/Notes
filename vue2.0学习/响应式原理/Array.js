//Object.defineProperty 只能适用于对象
// 如果是数组，通过重写函数的方式解决了这个问题
function render(){
    console.log('模拟视图渲染');
}
let obj = [1, 2, 3]

let methods = ['pop', 'shift', 'unshift', 'sort', 'reverse', 'splice', 'push']
// 先获取到原来的原型上的方法
let ArrayProto = Array.prototype;
// 创建一个自己的原型 并且重写methods这些方法
let proto = Object.create(ArrayProto);
methods.forEach(method=>{
    proto[method] = function(){
        ArrayProto[method].call(this, ...arguments);
        render();
    }
})

function observer(obj){
    if(Array.isArray(obj)){
        obj.__proto__ = proto;
        return;
    }
    if(typeof obj === 'object'){
        for(let key in obj){
            defineReactive(obj, key, obj[key]);
        }
    }
}

function defineProperty(data, key, value){
    observer(value);
    Object.defineProperty(ata, key, {
        get(){
            return value;
        },
        set(newval){
            observer(newVal);
            if(value!==newVal){
                render();
                value = newVal;
            }
        }
    })
}
observer(obj);
function $set(data, key, value) {
    defineReactive(data, key, value)
  }
  obj.push(123, 55)
  console.log(obj)
  