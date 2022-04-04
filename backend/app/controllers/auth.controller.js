const db = require("../../app/config/db.config");
const bcrypt        = require("bcryptjs");
const jwt           = require('jsonwebtoken');
const validator       = require("email-validator");

let registerController = {
    register : (req , res) => {
        const full_name = req.body.full_name;
        const dob = req.body.dob;
        const contact = req.body.contact;
        const user_type = req.body.user_type ? req.body.user_type : 'Customer';
        const email = req.body.email;
        const password = req.body.password;

        if(!validator.validate(email)){
            return res.status(400).send({
                message:"Provided email address is invalid"
            });
        }else if(password === ''){
            return res.status(400).send({
                message:"Password can not be blank"
            });
        }else{
            let sqlQuery = `SELECT * FROM users WHERE email_address = '${email}' LIMIT 1`;

            db.query(sqlQuery, async (err, results) => {
                if(err) throw err;
                let data = results[0];

                if(data){
                    return res.status(400).send({
                        message:"User already exist with this email address"
                    });
                }else{
                    const salt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(req.body.password, salt);

                    let data = {
                        full_name,
                        dob,
                        contact,
                        email_address:email,
                        password: hashedPassword,
                        user_type
                    };

                    let query = "INSERT INTO users SET ?";

                    db.query(query, data, async (err, results) => {
                        if(err) throw err;

                        let id = results.insertId;

                        let query2 = `SELECT * FROM users WHERE user_id='${id}'`;

                        db.query(query2, async(err, results) => {
                            if(err) throw err;

                            let user = results[0];console.log(user);
                            return gerUserCreateResponse(user, res);
                        });
                    });
                }
            });
        }
    },

    login: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        if(!validator.validate(email)){
            return res.status(400).send({
                message:"Provided email address is invalid"
            });
        }else if(password === ''){
            return res.status(400).send({
                message:"Password can not be blank"
            });
        }else{
            let sqlQuery = `SELECT * FROM users WHERE email_address = '${email}' LIMIT 1`;

            db.query(sqlQuery, async (err, results) => {
                if(err) throw err;
                let data = results[0];
                const validPassword = await bcrypt.compare(req.body.password, data.password);
                if(!validPassword)
                    return res.status(400).send({
                        message:"Invalid password or user does not exist"
                    });

                else{
                    return gerUserCreateResponse(data, res);
                }
            });
        }
    }
};

function gerUserCreateResponse(data, res){
    const token = jwt.sign({user_id:data.user_id, email_address: data.email_address}, 'SECRET_KEY');
    const user = {
        user_id: data.user_id,
        email_address: data.email_address,
        full_name: data.full_name ? data.full_name : '',
        DOB: data.DOB ? data.DOB : '',
        contact: data.contact ? data.contact : '',
        user_type: data.user_type ? data.user_type : ''
    }

    return res.status(200).header('Authorization').send({
        accessToken: token,
        user: user
    });
}

module.exports = registerController
