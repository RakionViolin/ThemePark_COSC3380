
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
    getAreas: () => {
        return axios.post("/api/v0/area", '', self.headers);
    },
    getAreaById: (id) => {
        return axios.post("/api/v0/area/"+id, '', self.headers);
    }
}
