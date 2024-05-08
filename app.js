const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            content: [],
        }
    },
    methods:{
        fetchData(){
            axios.get('./server.php').then((res)=>{
                console.log(res.data);
                this.content = res.data;
            })
        }
    },
    created(){
        this.fetchData();
    }
}).mount('#app')
