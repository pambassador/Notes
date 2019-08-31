<tempate>
    <div>
        <Props name="Hello Vue" 
        :type=type 
        :is-visibile=false 
        :on-change="handlePropChange" // 通过一般属性实现父向子通信；通过函数属性实现子向父通信
        title="Demo"
        :class="['test2']"
        :style="{ marginTop: '20px' }"
        style="margin-top: 10px"></Props>
    </div>
</tempate>
<script>
    import Props from './props'
    export default{
        components:{
            Props
        },
        data:()=>{
            return{
                name:'Hello',
                type:'success',
                bigPropsName: "Hello world!"
            }
        },
        methods:{
            handlePropChange(val){
                this.type=val;
            }
        }
    }
</script>