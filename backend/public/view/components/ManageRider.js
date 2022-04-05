export default {
    template: `
    <div class="row mt-2">
        <div class="col-md-12">
            <div class="card dashboard-body">
                <div class="row">
                    <div class="col-md-8 p-4">
                        <h3>Active User List</h3>
                        <table class="table table-bordered table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Full name</th>
                                    <th>Date of Birth</th>
                                    <th>Contact No</th>
                                    <th>Email Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Cirillo Petruszka</td>
                                    <td>1992-04-21</td>
                                    <td>701-330-5240</td>
                                    <td>cirillo-petruszka@gmail.com</td>
                                    <td>
                                        <button class="btn btn-outline-primary">Edit</button>
                                        <button class="btn btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Cirillo Petruszka</td>
                                    <td>1992-04-21</td>
                                    <td>701-330-5240</td>
                                    <td>cirillo-petruszka@gmail.com</td>
                                    <td>
                                        <button class="btn btn-outline-primary">Edit</button>
                                        <button class="btn btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Cirillo Petruszka</td>
                                    <td>1992-04-21</td>
                                    <td>701-330-5240</td>
                                    <td>cirillo-petruszka@gmail.com</td>
                                    <td>
                                        <button class="btn btn-outline-primary">Edit</button>
                                        <button class="btn btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Cirillo Petruszka</td>
                                    <td>1992-04-21</td>
                                    <td>701-330-5240</td>
                                    <td>cirillo-petruszka@gmail.com</td>
                                    <td>
                                        <button class="btn btn-outline-primary">Edit</button>
                                        <button class="btn btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="col-md-4 p-4">
                        <h3>Add User</h3>
                        <div class="form-group">
                            <label>Full Name</label>
                     
                            <input type="text" class="form-control" name="full_name" placeholder="Enter Email Here" v-model="full_name">
                        </div>
                        
                        <div class="form-group">
                            <label>Date of Birth</label>
                     
                            <input type="date" class="form-control" name="dob" placeholder="Enter Email Here" v-model="dob">
                        </div>
                        
                        
                        <div class="form-group">
                            <label>Contact</label>
                     
                            <input type="text" class="form-control" name="contact" placeholder="Enter Email Here" v-model="contact">
                        </div>
                        
                        <div class="form-group">
                            <label>Email Address</label>
                     
                            <input type="email" class="form-control" name="email" placeholder="Enter Email Here" v-model="email">
                        </div>
                        
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="" placeholder="Enter Password Here" v-model="password">
                        </div>
                        <select class="form-control" id="rides_coaster" v-model="user_type">
                            <option>Employee</option>
                            <option>Customer</option>
                            <option>Admin</option>
                        </select>
                        
                        
                        <div class="form-group text-center">
                            <button class="btn btn-outline-primary mt-4" @click="AddUser">Add</button>
                        </div>
                        
                        <div class="row pl-4">
                            <p class="link">Already have an account? <a href="#/login">Login </a> here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,

    data () {
        return {
            full_name: '',
            dob: '',
            contact: '',
            email: '',
            password: '',
            user_type: ''
        }
    },
    methods: {
        AddUser: function() {

        }
    }
}
