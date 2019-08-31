<template>
    <div>
        name:{{name}}
        <br/>
        type:{{type}}
        <br/>
        list:{{list}}
        <br/>
        isVisibile:{{isVisibile}}
        <br/>
        <button @click="handlerChange">change type</button>
    </div>
</template>
<script>
    export default{
        name: "propsDemo",
        props:{
            name:String,
            type:{
                validator: function(value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ["success", "warning", "danger"].includes(value);
                }
            },
            list:{
                type:Array,
                default:()=>[]
            },
            isVisibile:{
                type:Boolean,
                default:false
            },
            onChange: {
                type: Function,
                default: () => {}
            }
        },
        methods:{
            handlerChange(){
                this.onChange(this.type === "success" ? "warning" : "success");

            }
        }
    }
</script>