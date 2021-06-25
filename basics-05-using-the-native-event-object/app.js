const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            //            fullname: '',
            lastname: '',
        };
    },

    watch: {
        counter(value) {
            if (value > 50) {
                const that = this;
                setTimeout(function() {
                    that.counter = 0;
                },2000);
                
            }
        },
        //        name(value) {    //here name is same like the name property in data objects
        //            if(value==='') {
        //                return '';
        //            }else {
        //                this.fullname = value + ' ' + this.lastname; 
        //            }
        //        },
        //        
        //        lastname(value) {    //here lastname is same like the lastname property in data objects
        //            if(value==='') {
        //                return '';
        //            }else {
        //                this.fullname = this.name + ' ' + value; 
        //            }
        //        },
    },

    computed: {
        fullname() {
            console.log('running again ...');
            if (this.name === '' || this.lastname === '') {
                return '';
            }
            return this.name + ' ' + this.lastname;
        },
    },

    methods: {
        outputfullname() {
            console.log('running again');
            if (this.name == '') {
                return '';
            }
            return this.name + ' ' + 'ghadigaonkar';
        },
        setName(event) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },

        resetinput() {
            this.name = '';
            this.lastname = '';
        },
    }
});

app.mount('#events');
