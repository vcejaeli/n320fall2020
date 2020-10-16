Vue.component("this-book", {
    props: ["bookType"],
    template: "<li> {{ bookType }} 🐵 </li>"
})
//component goes at top (line 1)!!
// watch those parenthesis

let app = new Vue({ 
    el:"#app",
    data: {
        purchases: 0,
        message: "A wonderful read on Monkeys you'll never forget!", "Buy Today",
        ready: true,
        //set to false if you're not ready for app to be up

        books: [
            {author: "Branchester Bannana", price: 25, name: "The Monkey Book"},
            {author: "Branchester Bannana", price: 25, name: "The Monkey Book 2"},
        ]
    },

    methods: {
        buyBook: function() {
            this.purchase += 1;
        }
    }

});


//ahhh it's not showing up.. 
// I will have to revist this to see why I'm not having it work