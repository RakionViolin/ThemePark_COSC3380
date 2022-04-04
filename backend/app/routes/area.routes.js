const {createArea} = require("../controllers/area.controller");
module.exports = app => {
    const { getAreas, getArea, createArea, updateArea , deleteArea, rainOuts}    = require("../controllers/area.controller");
    const router            = require("express").Router();

    router.get("/", getAreas);
    router.get("/:id", getArea);
    router.post("/", createArea);
    router.put('/:id', updateArea);
    router.delete('/:id', deleteArea);
    router.post("/rainout", rainOuts);

    app.use('/api/v0/area', router);
}
