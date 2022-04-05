export default {
    template: `
    <div class="row mt-2">
        <div class="col-md-12">
            <div class="card dashboard-body">
                <div class="row">
                    <div class="col-md-3 p-4">
                        <h3>Summary Report</h3>
                        <table class="table table-bordered table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>New Rider</th>
                                    <th>New Area</th>
                                    <th>Ticket Sold</th>
                                    <th>Average Ticket Price</th>
                                    <th>Maintenance Done</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>10</td>
                                    <td>2</td>
                                    <td>200</td>
                                    <td>$12.5</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="col-md-6 p-4">
                        <h3>Maintenance Summary Report</h3>
                        <table class="table table-bordered table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Rider Coaster ID</th>
                                    <th>Employee Name</th>
                                    <th>Start Date</th>
                                    <th>Complete Date</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1213</td>
                                    <td>Cirillo Petruszka</td>
                                    <td>30 April 2021</td>
                                    <td>03 May 2021</td>
                                </tr>
                                 <tr>
                                    <td>1</td>
                                    <td>1213</td>
                                    <td>Cirillo Petruszka</td>
                                    <td>30 April 2021</td>
                                    <td>03 May 2021</td>
                                </tr>
                                 <tr>
                                    <td>1</td>
                                    <td>1213</td>
                                    <td>Cirillo Petruszka</td>
                                    <td>30 April 2021</td>
                                    <td>03 May 2021</td>
                                </tr>
                                 <tr>
                                    <td>1</td>
                                    <td>1213</td>
                                    <td>Cirillo Petruszka</td>
                                    <td>30 April 2021</td>
                                    <td>03 May 2021</td>
                                </tr>
                                 <tr>
                                    <td>1</td>
                                    <td>1213</td>
                                    <td>Cirillo Petruszka</td>
                                    <td>30 April 2021</td>
                                    <td>03 May 2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-3 p-4">
                        <h3>Another Summary</h3>
                        <table class="table table-bordered table-hover">
                            <tbody>
                                <tr>
                                    <th>New User</th><td>5</td>
                                </tr>
                                <tr>
                                    <th>New Ticket</th><td>$50</td>
                                </tr>
                                <tr>
                                    <th>Average</th><td>$48.5</td>
                                </tr>
                            </tbody>
                            
                        </table>
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
            axios.post('api/v0/auth/login', data, )
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
