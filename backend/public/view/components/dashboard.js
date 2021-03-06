export default {
    template: `
    <div class="row mt-2">
        <div class="col-md-12">
        <div class="card dashboard-body">
                <div class="row">
                    <div class="col-md-7 pt-5 pl-5 pb-5">
                        <h3>Purchase history</h3>
                        <table class="table table-bordered table-striped table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Ride Coaster</th>
                                    <th>Admission Date</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>McDermott-Konopelski</td>
                                    <td>30 April 2021</td>
                                    <td>$18</td>
                                </tr>
                                <tr>
                                    <td>Prosacco-Johns</td>
                                    <td>30 April 2021</td>
                                    <td>$20</td>
                                </tr>
                                <tr>
                                    <td>Barton, Mosciski and Yost</td>
                                    <td>08 June 2021</td>
                                    <td>$22</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                    <div class="col-md-5 pt-5 pr-5 pb-5">
                        <div class="card">
                            <div class="card-header bg-dark text-white">
                                <h6 class="text-center">Buy Ticket</h6>
                            </div>
                            <form class="card-body">
                                <div class="form-group">
                                    <label for="rides_coaster">Rides Coaster</label>
                                    <select class="form-control" id="rides_coaster" v-model="formData.rides_coaster">
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="admission_date">Admission Date</label>
                                    <input type="date" class="form-control" id="admission_date" v-model="formData.admission_date">
                                </div>
                                
                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price" v-model="formData.price">
                                </div>
                                
                                <div class="form-group text-center">
                                    <button class="btn btn-primary" @click="Purchase">Purchase</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,

    data () {
        return {
            formData: {
                rides_coaster:'',
                admission_date: '',
                price: ''
            }
        }
    },
    created: function () {

    },

    methods: {
        Purchase: function(){
            var root = this;
            axios.post('api/v0/auth/login', formData, )
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
