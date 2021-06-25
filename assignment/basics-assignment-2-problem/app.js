const app = Vue.createApp({
    data() {
        return {
            name:'',
            name1:'',
            confirmname:'',
            confirmname1:'',
        }
    },
    methods: {
        submitform() {
           alert('submitted');  
         },
        
        confirminput() {
          this.confirmname = this.name;  
        },
        confirminput1() {
          this.confirmname1 = this.name1;  
        },
        setname(event){
            this.name = event.target.value; //here we use vanilla javascript
        },
        setname1(event){
            this.name1 = event.target.value; //here we use vanilla javascript
        },
    }
});

app.mount('#assignment')