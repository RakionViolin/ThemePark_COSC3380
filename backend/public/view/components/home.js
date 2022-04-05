import callApi from '../services/callApi.js';
export default {
    template: `
    <div class="row mt-2">
        <div class="col-md-8">
            <div class="content">
                <h1>Thrills n' Chills <br><span>Theme park</span> <br></h1>
                <p class="par"> The experience of a lifetime is closer than you think! Thrills n' Chills theme park will immerse you<br>  
                with fun times, exciting activites, and unforgettable memories.<br> Are you ready to expeirence some Thrills n' Chills?</p>

               <button class="cn"><a href="about-us.html">LEARN MORE</a></button>
            </div>
        </div>
        
        <div class="col-md-4">
            <div class="card p-4 card-login-form">
                <h2 class="card-title text-center">Login</h2>
                
                <div class="form-group">
                    <label>Email Address</label>
             
                    <input type="email" class="form-control" name="email" v-model="email" placeholder="Enter Email Here">
                </div>
                
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" name="" v-model="password" placeholder="Enter Password Here">
                </div>
                
                <div class="form-group text-center">
                    <button class="btn btn-outline-primary" @click="login">Login</button>
                </div>
                
                <div class="row pl-4">
                    <p class="link">Don't have an account? <a href="#/register">Sign up </a> here</a></p>
                </div>
                
            </div>
        </div>
    </div>`,

    data () {
        return {
            email:'',
            password: '',
            error: ''
        }
    },
    created: function () {

    },

    methods: {
        login: function(){
            let data = {
                email: this.email,
                password: this.password
            }

            callApi.login(data)
                .then(function (response) {
                    if(response.data.status == 200) {
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        window.location.reload();
                    }
                    else alert(response.data.message);
                })
                .catch(function (error) {
                    console.log(error.data.status);
                    console.log(JSON.stringify(error))
                });
        }
    }
}
