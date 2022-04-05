import router from '../router/router.js';

export default {
    template: `
    <nav class="bg-transparent navbar navbar-expand-lg">
        <a class="navbar-brand page" href="#/"><h2 class="logo">Thrills n' Chills</h2></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link page" href="#/home">Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link page" href="#/about">About</a>
                </li>
                <li class="nav-item active" >
                    <a class="nav-link page" href="#/rides">Rides</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link page" href="#/hours">Hours</a>
                </li>

            </ul>
            <ul class="navbar-nav ml-auto">

                <li class="nav-item active"  v-if="loggedIn">
                    <a class="nav-link page" href="#/register" v-on:click="logout">{{username}} (Logout)</a>
                </li>
                <li class="nav-item active"  v-if="needLogin">
                    <a class="nav-link page" href="#/register">Register</a>
                </li>

                <li class="nav-item active"  v-if="needLogin">
                    <a class="nav-link page" href="#/login">Login</a>
                </li>

            </ul>

        </div>
    </nav>`,

    data () {
        return {
            loggedIn:false,
            username: '',
            needLogin: true
        }
    },
    created: function () {
        console.log("Nav bar");

        let user = JSON.parse(localStorage.getItem("user"));
        if(user){
            this.loggedIn = true;
            this.username = user.full_name;
            this.needLogin = false;
            console.log("user name in created "+ this.username);
            router.push({name: 'Dashboard'})
        }
    },
    methods: {
        logout () {
            localStorage.removeItem('user')
            this.loggedIn = false;
            this.needLogin = true;
            router.push({name: 'default'})
        }
    },
    mounted () {

    }

}
