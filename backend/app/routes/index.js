module.exports = app => {
    require("../routes/auth.routes.js") (app);
    require("../routes/area.routes.js") (app);
}
