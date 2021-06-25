const app = Vue.createApp({
    data() {
        return {
            Name: 'Mayur Ghadigaonkar',
            Age:24,
            imgurl:'https://image.shutterstock.com/z/stock-photo-the-white-bike-parked-near-yellow-wall-building-vietnam-city-called-as-yellow-city-there-are-a-473188582.jpg',
            
        };
    },
    
    methods: {
        calculateAge() {
            return this.Age +5; 
        },
        
        calculaterandom() {
            return Math.random();
        }
    }
    
});

app.mount('#assignment');