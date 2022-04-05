export default {
    template: `
    <div class="row mt-2">
        <div class="col-md-12">
            <div class="card dashboard-body">
                <div class="row">
                <div class="col-md-6 p-4">
                    <h3>Purchase history</h3>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ride Coaster</th>
                                <th>Admission Date</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>#</td>
                                <td>Date</td>
                                <td>Date</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="col-md-6 p-4 card-buy-ticket">
                    <h3>Buy Ticket</h3>
                    <form class="p-4">
                        <div class="form-group">
                            <label>Email Address</label>
                     
                            <input type="email" class="form-control" name="email" v-model="email" placeholder="Enter Email Here">
                        </div>
                        
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="" v-model="password" placeholder="Enter Password Here">
                        </div>
                        
                        <div class="form-group text-center">
                            <button class="btn btn-outline-primary" @click="Purchase">Purchase</button>
                        </div>
                    </form> 
                </div>
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
        Purchase: function(){
            let data = {
                email: this.email,
                password: this.password
            }

            var root = this;
            axios.post('api/v0/auth/login', data)
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
