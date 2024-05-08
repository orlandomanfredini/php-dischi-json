const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            content: [],
            musicObject: {},
            modal: false,
        }
    },
    methods:{
        fetchData(){
            axios.get('./server.php').then((res)=>{
                console.log(res.data);
                this.content = res.data;
            })
        },
        visible(element){
             return this.musicObject= element, this.modal = true;
             

        },
        close(){
            return this.modal = false;
        }
    },
    created(){
        this.fetchData();
    }
}).mount('#app')
