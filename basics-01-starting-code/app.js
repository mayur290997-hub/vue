const app = Vue.createApp({
    data() {
        return {
            courseGoalA:'Finish the course and learn vue !',
            courseGoalB:'Master vue and build amazing app !',
            vuelink:'https://vuejs.org/'
            
        };
    },
    
    methods:{   
        outputGoal() {      
            const randomnumber=Math.random();
            if (randomnumber<0.5){
                return this.courseGoalA;    // here this is keyword which will be used to acces the data property from data
            }
            else{
                return this.courseGoalB;    // here this is keyword which will be used to acces the data property from data
            }
        }
    }
});
app.mount('#user-goal');
