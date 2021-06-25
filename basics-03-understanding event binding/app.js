const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name:'',
            confirmname:'',

        };
    },
    methods: {
        confirminput() {
          this.confirmname = this.name;  
        },
         submitform() {
           alert('submitted');  
         },
        setname(event,lastname){
            this.name = event.target.value + ' ' + lastname; //here we use vanilla javascript
        },
        add(num) {
            return this.counter = this.counter + num; //here we use the args in function 
        },
        substract(num) {
            return this.counter = this.counter - num; //here we use the args in function
        },
    }
});

app.mount('#events');
