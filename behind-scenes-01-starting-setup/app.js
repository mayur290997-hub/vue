const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
            // console.dir(this.$refs.userText);
        },
    },
    beforeCreate() {
        console.log('beforeCreate()');
    },
    created() {
        console.log('created()');
    },
    beforeMount() {
        console.log('beforeMount()'); 
    },
    mounted() {
        console.log('mounted()');
    },
    beforeUpdated() {
        console.log('beforeUpdated()');
    },
    updated() {
        console.log('updated()');
    },
    beforeUnmounted() {
        console.log('beforeunmounted()');
    }
});

app.mount('#app');

setTimeout( function() {
    app.unmount('#app');
},3000);


//const app2 = Vue.createApp({
//  template: `
//    <p>{{ favoriteMeal }}</p>
//  `,
//  data() {
//    return {
//      favoriteMeal: 'Pizza'
//    };
//  }
//});
//
//app2.mount('#app2');

// ....

//const data = {
//  message: 'Hello!',
//  longMessage: 'Hello! World!'
//};
//
//const handler = {
//  set(target, key, value) {
//    if (key === 'message') {
//      target.longMessage = value + ' World!';
//    }
//    target.message = value;
//  }
//};

//const proxy = new Proxy(data, handler);
//
//proxy.message = 'Hello!!!!';

//console.log(proxy.longMessage);
