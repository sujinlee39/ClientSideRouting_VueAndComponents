export default {
    template: `
        <section>
        <h1>This is the app page</h1>

        <form id="my-form">
            <label for="name">Enter your name:</label>
            <input v-model="user" type="text" name="username" required placeholder="username">

            <label for="password">Enter your password:</label>
            <input :model="password" type="password" name="password" required placeholder="password">

            <input @clik.prevent="submitUserData" type="submit" value="Sign Up / Log In">
        </form>
        </section>
    `,
    
    data: function(){
        return {
            user: "",
            password: "",
        }
    },

    methods: {
        submitUserData(){
            // do a fetch here using the POST method
            // refer to the Node Mailer example from last semester as to
            // how to get data form into a Fetch call using POST
            console.log('hit the API Pan is asking for, which should be in the root Vue instance');

            // rest the form on the page
            document.querySelector('form').reset();

            // rest the username and password data in our app
            this.user = "",
            this.password = "";
        }
    },

    created: function(){
        console.log('our app component rendered');
    }
}