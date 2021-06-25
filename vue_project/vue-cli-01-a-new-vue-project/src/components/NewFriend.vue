<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="Name">Name : </label>
            <input type="text" v-model="enterName">
        </div>
        <div>
            <label for="phone">phone : </label>
            <input type="tel" v-model="enterPhone">
        </div>
        <div>
            <label for="email">email : </label>
            <input type="email" v-model="enterEmail">
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>   
</template>

<script>
export default {

    emit:['add-contact'],

    data() {
        return {
            enterName:'',
            enterPhone:'',
            enterEmail:''
        };
    },
    methods:{
        submitData() {
            this.$emit('add-contact',this.enterName , this.enterPhone , this.enterEmail);
        }
    },
};
</script>

<style>

</style>