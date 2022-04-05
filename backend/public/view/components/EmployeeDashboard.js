import callApi from '../services/callApi.js';
export default {
    template: `
    <div class="row mt-2">
        <div class="col-md-12">
        <div class="card dashboard-body">
                <div class="row">
                    <div class="col-md-7 pt-5 pl-5 pb-5">
                        <h3>Manage Maintenance</h3>
                        <table class="table table-bordered table-striped table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Ride Coaster</th>
                                    <th>Started Date</th>
                                    <th>Completed Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>McDermott-Konopelski</td>
                                    <td>30 April 2021</td>
                                    <td>03 May 2021</td>
                                    <td>
                                        <button class="btn btn-outline-primary">Edit</button>
                                        <button class="btn btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Prosacco-Johns</td>
                                    <td>30 April 2021</td>
                                    <td>03 May 2021</td>
                                    <td>
                                        <button class="btn btn-outline-primary">Edit</button>
                                        <button class="btn btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
                    <div class="col-md-5 pt-5 pr-5 pb-5">
                        <div class="card">
                            <div class="card-header bg-dark text-white">
                                <h5 class="text-center">Add Maintenance</h5>
                            </div>
                            <form class="card-body">
                                <div class="form-group">
                                    <label for="rides_coaster">Rides Coaster</label>
                                    <select class="form-control" id="rides_coaster" v-model="formData.Rides_Coaster_ID">
                                        <option>McDermott-Konopelski</option>
                                        <option>Prosacco-Johns</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label>Started Date</label>
                                    <input type="date" class="form-control" v-model="formData.Date_Started">
                                </div>
                                
                                <div class="form-group">
                                    <label>Completed Date</label>
                                    <input type="date" class="form-control" v-model="formData.Date_Completed">
                                </div>
                                
                                <div class="form-group text-center">
                                    <button class="btn btn-primary" @click="AddMaintenance">Save</button>
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
                Date_Started:'',
                Date_Completed: '',
                Rides_Coaster_ID: ''
            }
        }
    },

    methods: {
        AddMaintenance: function(){
            callApi.addMaintenance(formData)
                .then(function (response) {
                    if(response.data.status == 200) {
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
