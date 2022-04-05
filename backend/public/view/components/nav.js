import router from '../router/router.js';
// import EventBus from './event-bus.js';

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
                <li class="nav-item dropdown" v-if="loggedIn">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>{{username}}<span
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item page" v-on:click="logout" href="#">Logout</a>
                    </div>
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
            this.username = user.name;
            this.needLogin = false;
            console.log("user name in created "+ this.username);
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
        var self = this;
        /*EventBus.$on('IS_LOGGEDIN', function (_user) {
            self.loggedIn = true;
            self.username = _user.name;
            self.needLogin = false;
        });*/
    }

}
