
module.exports = app => {
    const { getRideCoaster, allRideCoasters, createRideCoaster, updateRideCoaster, deleteRideCoaster}
        = require("../controllers/ride_coaster.controller");
    const verify  = require('./verifyToken');
    const router   = require("express").Router();

    router.get("/", verify, allRideCoasters);
    router.get("/:id", verify, getRideCoaster);
    router.post("/", verify, createRideCoaster);
    router.put('/:id', verify, updateRideCoaster);
    router.delete('/:id', verify, deleteRideCoaster);

    app.use('/api/v0/ride-coaster', router);
}
