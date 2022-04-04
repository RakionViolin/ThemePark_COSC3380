module.exports = app => {
    require("../routes/auth.routes.js") (app);
    require("../routes/area.routes.js") (app);
    require("../routes/ride.routes.js") (app);
    require("../routes/ride_coaster.routes.js") (app);
}
