<template>
<div>
    name:{{name}}
    <br/>
    <input :value="name" @change="handlerChange" />
</br/>
</div>
</template>
<script>
    export default{
        props:{
            name:String,
        },
        methods: {
            handlerChange(e){
                const res = this.$emit("change",e.target.value, val=>{
                    console.log('父组件callback传递过来的值',val);
                });
                console.log(res, res==this); //实例，true
            }
        }
    }
</script>