const app = Vue.createApp({
    data() {
        return {

            friends: [{
                    id: 'manual',
                    name: 'mayur ghadigaonkar',
                    phone: 9763695806,
                    email: 'mandyghadi@gmail.com'
            },
                {
                    id: 'mandy',
                    name: 'mandy ghadigaonkar',
                    phone: 9325589114,
                    email: 'mayurghadi@gmail.com'
            },
            ],
        };
    }
});

app.component('friend-contact', {
    template: `
            <li>
                <h2>{{friend.name}}</h2>
                <button @click="toggleDetails()">
                    {{detailAreVisiable ? 'Hide' : 'show'}}Details        
                </button>
                <ul v-if="detailAreVisiable">
                    <li><strong>Phone:</strong> {{friend.phone}}</li>
                    <li><strong>Email:</strong> {{friend.email}}</li>
                </ul>
            </li>
`,
    data() {
        return {
            detailAreVisiable: false,
            friend: {
                id: 'mandy',
                name: 'mandy ghadigaonkar',
                phone: 9325589114,
                email: 'mayurghadi@gmail.com'
            },

        };
    },

    methods: {
        toggleDetails() {
            this.detailAreVisiable = !this.detailAreVisiable;
        },
    }
});

app.mount('#app')
