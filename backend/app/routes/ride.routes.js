module.exports = app => {
    const { getRide, allRides, createRide, updateRide, deleteRide}
        = require("../controllers/rides.controller");
    const router   = require("express").Router();

    router.get("/", allRides);
    router.get("/:id", getRide);
    router.post("/", createRide);
    router.put('/:id', updateRide);
    router.delete('/:id', deleteRide);

    app.use('/api/v0/ride', router);//rides_coaster
}
