//const{ createApp , ref , computed } = vue;

const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue:''
        };
    },
    methods :{    
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue= "";
        }
    }   
});

app.mount('#app');

//const buttonE1 =document.querySelector('button');
//const inputE1 =document.querySelector('input');
//const listE1 =document.querySelector('ul');
//
//function addGoal(){
//    const enteredValue=inputE1.value;
//    const listItemEl = document.createElement('li');
//    listItemEl.textContent = enteredValue;
//    listE1.appendChild(listItemEl);
//    inputE1.value = '';
//}
//
//buttonE1.addEventListener('click',addGoal)

