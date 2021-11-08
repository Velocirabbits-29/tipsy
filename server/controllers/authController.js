// const fs = require('fs');
// const path = require('path');
const { Pool } = require('pg');
const db = require ('../models/userModels');
const bcrypt = require ('bcryptjs');

const authController = {};

authController.createUser = async(req, res, next) => {
 
    try {
        
        const { username, password, firstName, lastName, email } = req.body;
        // query to enter name and email into user table
        // const userQuery = `INSERT INTO users(first_name, last_name, email) VALUES (${firstName}, ${lastName}, ${email})`;
        // db.query(userQuery)
        //     .then(data => console.log(data));
        //  const ass = bcrypt.hash(password, 10, async(err, hash) => {
        //     hashed = await hash;
        //         // .then(db.query(`INSERT INTO user_login(user_id username, password) VALUES (${res.locals.userId}, '${username}', ${hash})`))
        //         // .catch((err) => {
        //         //     //______________
        //         //     console.log('caught an error in one of the database queries');
        //         //     //______________
        //         //     return next(err);
        //         // });
        // });
        const hash = await bcrypt.hashSync(password, 10);

        console.log(username, password, firstName, lastName, email)
        //const userQuery = `INSERT INTO users(first_name, last_name, email) VALUES (${firstName}, ${lastName}, ${email}) RETURNING *`;
        const userQuery = "SELECT * FROM users";
        const result = await db.query(userQuery);
            console.log(result);
        
                // .then(db.query(`INSERT INTO user_login(user_id username, password) VALUES (${res.locals.userId}, '${username}', ${hash})`))
                // .catch((err) => {
                //     //______________
                //     console.log('caught an error in one of the database queries');
                //     //______________
                //     return next(err);
                // });
       
        // db.query(`INSERT INTO users(first_name, last_name, email) VALUES ('${firstName}', '${lastName}', '${email}') RETURNING *`)
        // .then(data => console.log('returning the data log', data))
        // .then((data) => {
        //     res.locals.userId = data;
        //     console.log('should be userId ->', res.locals.userId)
        // })
        return next();
    } catch(err) {
        //______________
        console.log(`entered big "catch block" of createUser middleware`);
        //______________
        return next(err);
    };
};

authController.verifyUser = (req, res, next) => {
    try{
        //______________
        console.log(`entered verifyUser middleware`);
        //______________
        const {username, password} = req.body;
        console.log(`password === ${password}`)
        bcrypt.hash(password, 10, (err, hash) => {
            db.query(`SELECT username, password FROM user_login WHERE username = '${username}' AND password = '${hash}'`)
            .then(data => {
                //______________
                console.log(`received data from database query in verifyUser middleware`);
                //______________
                if (!data) return next(err);
                return next();
            })
            .catch((err) => {
                //______________
                console.log(`caught an error in database query in verifyUser middleware`);
                //______________
                return next(err);
            });
        });
    } catch(err) {
        //______________
        console.log(`entered big "catch block" of verifyUser middleware`);
        //______________
        return next(err);
    };
};

// // check with jennifer re: setLocalStorage

// authController.setSSIDCookie = (req, res, next) => {
//     try {
//         const { username } = req.body;
//         const query = `SELECT userLoginInfo(${username})`;
//         db.query(query)
//         .then((data) => {
//             // not sure that there will be a user_id property in data. my thinking is that data should be the full document that holds the input username
//             const { user_id } = data; 
//             res.cookie('ssid', user_id, { httpOnly: true });
//             return next();
//         })
//         .catch((err) => {
//             return next(err);
//         });
//     } catch(err) {
//         return next(err);
//     };
//   }

//   authController.isLoggedIn = (req, res, next) => {
//       try{

//       } catch(err) {
//         return next(err)
//       }
//   }

module.exports = authController;
