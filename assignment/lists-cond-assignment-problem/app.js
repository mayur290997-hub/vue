const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enterTaskvalue: '',
            taskListIsVisible:true,

        };
    },
    computed:{
        buttoncaption() {
            return this.taskListIsVisible ? 'show list' : 'hide list';
        }
    },

    methods: {
        addTask() {
            this.tasks.push(this.enterTaskvalue);
            this.enterTaskvalue = '';
        },

        toggleTaskList() {
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    }
});

app.mount('#assignment');
