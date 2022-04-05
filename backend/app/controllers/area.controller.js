const db = require("../../app/config/db.config");

module.exports = {
    createArea: (req, res) => {
        const name = req.body.name;

        if(name === ''){
            return res.status(400).send({
                message:"Area name can not be blank"
            });
        }else{
            let query = `SELECT * FROM area WHERE Area_Name='${name}'`;

            db.query(query, async(err, results) => {
                if(err){
                    return res.status(400).send({
                        message:"Something went wrong! Please try again later 1"
                    });
                }

                let row = results[0];

                if(row){
                    return res.status(400).send({
                        message:"Area already exist with this name"
                    });
                }else{
                    let data = {
                        Area_Name: name
                    }
                    let query2 = "INSERT INTO area SET ?";

                    db.query(query2, data, async (err, results) => {
                        if(err) {
                            return res.status(400).send({
                                message:"Something went wrong! Please try again later " + err.message
                            });
                        }

                        let id = results.insertId;

                        let query3 = `SELECT * FROM area WHERE Area_ID='${id}'`;

                        db.query(query3, async(err, results) => {
                            if(err){
                                return res.status(400).send({
                                    message:"Something went wrong! Please try again later 2"
                                });
                            }

                            let row = results[0];

                            return res.status(200).send({
                                area: row
                            });
                        });
                    });
                }
            });
        }
    },

    getArea: (req, res) => {
        let area_id = req.params.id;

        let query = `SELECT * FROM area WHERE Area_ID=${area_id}`;

        db.query(query, async(err, results) => {
            if(err){
                return res.status(200).send({
                    status: 400,
                    message:"Something went wrong! Please try again later 2"
                });
            }

            return res.status(200).send({
                status: 200,
                area: results[0]
            });
        });
    },

    getAreas: (req, res) => {
        let query = `SELECT * FROM area`;
        console.log(query);
        db.query(query, async(err, results) => {
            if(err){
                return res.status(400).send({
                    message:"Something went wrong! Please try again later 2"
                });
            }

            return res.status(200).send({
                area: results
            });
        });
    },

    updateArea: (req, res) => {
        let area_id = req.params.id;
        const name = req.body.name;

        if(name === ''){
            return res.status(400).send({
                message:"Area name can not be blank"
            });
        }else {
            let query = `UPDATE area
                         SET  Area_Name = '${name}' WHERE Area_ID=${area_id}`;
            let data = {
                Area_ID: area_id,
                Area_Name: name
            }

            db.query(query, async(err, results) => {
                if(err){
                    return res.status(400).send({
                        message:"Something went wrong! Please try again later 2"
                    });
                }

                return res.status(200).send({
                    area: data
                });
            });
        }
    },

    deleteArea: (req, res) => {
        let area_id = req.params.id;
        let query = `DELETE FROM area WHERE Area_ID=${area_id}`;

        db.query(query, async(err, results) => {
            if(err){
                return res.status(400).send({
                    message:"Something went wrong! Please try again later 2"+ err.message
                });
            }

            return res.status(200).send({
                message:"Area deleted successfully"
            });
        });
    },

    rainOuts: (req, res) => {
        let data = {
            Date_: req.body.date,
            Area_ID: req.body.area_id
        }
        let query = "INSERT INTO rainouts SET ?";

        db.query(query, data, async (err, results) => {
            if(err) {
                return res.status(400).send({
                    message:"Something went wrong! Please try again later " + err.message
                });
            }

            return res.status(400).send({
                message:"Rain out added successfully"
            });
        });
    }
}
