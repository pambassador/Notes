// this.$emit的返回值是什么？ this // 如果需要返回值可以使用回调参数
<template>
    <div class="hello"> 
        <div>
            <Demo :name=name @change="handlerChange"></Demo>
            <br/>
        </div>
    </div>
</template>
<script>
    import Demo from './demo.vue'
    export default{
        components:{
            Demo
        },
        data(){
            return{
                name:'',
            }
        },
        methods:{
            handlerChange(val, calback){
                console.log('子组件传递过来的值', val, callback);
                this.name = val;
                callback("helloWorld");
                return "hello";
            }
        }
    }
</script>
<style>
    .hello {
        margin:30px;
    }
</style>