
export default  {
    headers: () => {
        let token =  localStorage.getItem("accessToken");

        if (token) {
            return {
                "Content-type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "http://localhost:8080/*",
                'x-access-token': token,
                'Authorization' : 'Bearer '+token
            };
        } else {
            return {
                "Content-type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "http://localhost:8080/*",
            };
        }
    },
    login: (data) => {
        return axios.post("/api/v0/auth/login", data, self.headers);
    },
    register: (data) => {console.log(data);
        return axios.post("/api/v0/auth/register", data, self.headers);
    },
    getAreas: () => {
        return axios.get("/api/v0/area/", '', self.headers);
    },
    getAreaById: (id) => {
        return axios.get("/api/v0/area/"+id, '', self.headers);
    },
    createArea: (data) => {
        return axios.post("/api/v0/area/", data, self.headers);
    },
    updateArea: (data, id) => {
        return axios.put("/api/v0/area/"+id, data, self.headers);
    },
    deleteAreaById: (id) => {
        return axios.delete("/api/v0/area/"+id, '', self.headers);
    },
    addRainOut: (data) => {
        return axios.post("/api/v0/area/rainout", data, self.headers);
    },
    getRides: () => {
        return axios.get("/api/v0/ride/", '', self.headers);
    },
    getRideById: (id) => {
        return axios.get("/api/v0/ride/"+id, '', self.headers);
    },
    createRide: (data) => {
        return axios.post("/api/v0/ride/", data, self.headers);
    },
    updateRide: (data, id) => {
        return axios.put("/api/v0/ride/"+id, data, self.headers);
    },
    deleteRideById: (id) => {
        return axios.delete("/api/v0/ride/"+id, '', self.headers);
    },
    getRideCoasters: () => {
        return axios.get("/api/v0/ride-coaster/", '', self.headers);
    },
    getRideCoasterById: (id) => {
        return axios.get("/api/v0/ride-coaster/"+id, '', self.headers);
    },
    createRideCoaster: (data) => {
        return axios.post("/api/v0/ride-coaster/", data, self.headers);
    },
    updateRideCoaster: (data, id) => {
        return axios.put("/api/v0/ride-coaster/"+id, data, self.headers);
    },
    deleteRideCoasterById: (id) => {
        return axios.delete("/api/v0/ride-coaster/"+id, '', self.headers);
    },
    createTicket: (data) => {
        return axios.post("/api/v0/ticket/", data, self.headers);
    },
    addMaintenance: (data) => {
        return axios.post("/api/v0/maintenance/", data, self.headers);
    }
}
