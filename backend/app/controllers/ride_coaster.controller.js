const db = require("../../app/config/db.config");

module.exports = {
    createRideCoaster: (req, res) => {
        const Name = req.body.name;
        const Type = req.body.type;
        const Price = req.body.price;
        const Capacity = req.body.capacity;
        const Area = req.body.area;
        const Date_opened = req.body.date_opened;
        const Ride_ID = req.body.ride_id;

        let data = {
            Name,
            Type,
            Price,
            Capacity,
            Area,
            Date_opened,
            Ride_ID
        };

        let query = "INSERT INTO rides_coaster SET ?";

        db.query(query, data, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }

            let ride_id = results.insertId;
            let query2 = `SELECT * FROM rides_coaster WHERE Ride_coaster_ID='${ride_id}'`;

            db.query(query2, async(err, results) => {
                if(err){
                    return res.status(400).send({
                        message:"Something went wrong! Please try again later 2"
                    });
                }

                let row = results[0];

                return res.status(200).send({
                    ride_coaster: row
                });
            });
        });
    },

    allRideCoasters: (req, res) => {
        // get all rides_coaster
        let query = "SELECT * FROM rides_coaster";

        db.query(query, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).send({
                message: "All Ride Coasters",
                rides_coaster: results
            });
        });
    },

    getRideCoaster: (req, res) => {
        let ride_id = req.params.id;

        let query = `SELECT * FROM rides_coaster WHERE Ride_coaster_ID='${ride_id}'`;

        db.query(query, (err, results) => {
                if (err) {
                    return res.status(500).send(err);
                }
                return res.status(200).send({
                    message: "Ride Coaster",
                    ride_coaster: results
                });
            }
        );
    },

    updateRideCoaster: (req, res) => {
        let ride_id = req.params.id;
        const Name = req.body.name;
        const Type = req.body.type;
        const Price = req.body.price;
        const Capacity = req.body.capacity;
        const Area = req.body.area;
        const Date_opened = req.body.date_opened;
        const Ride_ID = req.body.ride_id;

        if (ride_id === '') {
            return res.status(400).send({
                message: "Ride Coaster ID can not be blank"
            });
        }
        else {
            let query = `UPDATE rides_coaster
                        SET  Name = '${Name}', Type = '${Type}', Price = '${Price}', Capacity = '${Capacity}', Area = '${Area}', Date_opened = '${Date_opened}', Ride_ID = '${Ride_ID}' WHERE Ride_coaster_ID=${ride_id}`;
            let data = {
                Ride_coaster_ID: ride_id,
                Name: Name,
                Type: Type,
                Price: Price,
                Capacity: Capacity,
                Area: Area,
                Date_opened: Date_opened,
                Ride_ID: Ride_ID
            }

            db.query(query, async(err, results) => {
                if (err) {
                    return res.status(400).send({
                        message: "Something went wrong! Please try again later!"
                    });
                }

                return res.status(200).send({
                    message : "Ride Coaster updated successfully",
                    ride_coaster: data
                });
            });
        }
    },

    deleteRideCoaster: (req, res) => {
        let ride_id = req.params.id;

        if (ride_id === '') {
            return res.status(400).send({
                message: "Ride Coaster ID can not be blank"
            });
        }
        else {
            let query = `DELETE FROM rides_coaster WHERE Ride_coaster_ID=${ride_id}`;

            db.query(query, async(err, results) => {
                if (err) {
                    return res.status(400).send({
                        message: "Something went wrong! Please try again later!"
                    });
                }

                return res.status(200).send({
                    message: "Ride Coaster deleted successfully"
                });
            });
        }
    },

    createTicket: (req, res) => {
        //Create row for ticket table
        const Rides_coaster_ID = req.body.ride_coaster_id;
        const customer_ID = req.user.user_id;
        const price = req.body.price;
        const admission_date = req.body.admission_date;

        let data = {
            Rides_coaster_ID,
            customer_ID,
            price,
            admission_date
        };

        let query = "INSERT INTO ticket SET ?";

        db.query(query, data, (err, results) => {

            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).send({
                message: "Ticket created successfully",
                ticket: results
            });
        });

    },

    maintenance: (req, res) => {
        //Create row for maintenance table
        const Rides_coaster_ID = req.body.ride_coaster_id;
        const Worker_ID = req.body.worker_id;
        const Date_Started = req.body.date_started;
        const Date_Completed = req.body.date_Completed;

        let data = {
            Rides_coaster_ID,
            Worker_ID,
            Date_Started,
            Date_Completed
        };

        let query = "INSERT INTO maintenance SET ?";

        db.query(query, data, (err, results) => {

            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).send({
                message: "Maintenance created successfully",
                maintenance: data
            });
        });
    },
}
