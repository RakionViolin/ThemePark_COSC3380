module.exports = app => {
    const { getRideCoaster, allRideCoasters, createRideCoaster, createTicket, maintenance, updateRideCoaster, deleteRideCoaster}
        = require("../controllers/ride_coaster.controller");
    const router   = require("express").Router();

    router.get("/", allRideCoasters);
    router.get("/:id", getRideCoaster);
    router.post("/", createRideCoaster);
    router.post("/ticket", createTicket);
    router.post("/maintenance", maintenance);
    router.put('/:id', updateRideCoaster);
    router.delete('/:id', deleteRideCoaster);

    app.use('/api/v0/ride-coaster', router);
}
