const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enterGoalvalue:'',

        };
    },
    
    methods:{
        addGoal() {
            this.goals.push(this.enterGoalvalue);
            this.enterGoalvalue= '';
        },
        
        removeGoal(idx) {
            this.goals.splice(idx,1);
        }
    }
});

app.mount('#user-goals');
