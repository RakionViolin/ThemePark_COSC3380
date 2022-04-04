const express   = require("express"),
    bodyParser  = require("body-parser"),
    cors        = require("cors"),   
    path        = require('path'),
    app         = express();

    require('dotenv').config();

    var corsOptions = {
        origin: "*"
    };
    
    app.use(cors(corsOptions));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Request-Method", "POST");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    app.options('*', cors(corsOptions));
    
    // parse requests of content-type - application/json
    app.use(bodyParser.json());
    
    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true })); 

    // simple route
    app.get("/", (req, res) => {
        res.json({ message: "Welcome to API V1.0.0" });
    });

    const db = require("./app/config/db.config");

    db.connect((err) =>{
        if(err) throw err;
        console.log('Mysql Connected with App...');
      });

    //Include route
    require("./app/routes")(app);

    // set port, listen for requests
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });