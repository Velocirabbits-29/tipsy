const db = require("../models/userModels");
const bcrypt = require("bcryptjs");

const authController = {};

/*_______THIS WAS NOT FULLY IMPLEMENTED, for some reason second query request isn't working.. Good luck!_______*/
authController.createUser = (req, res, next) => {
  const { username, password, firstName, lastName, email } = req.body;

  console.log("createUser controller fired, here's the body -->>", req.body);
  const hash = bcrypt.hashSync(password, 10);
  console.log("hash:", hash);
  const values = [username, hash, firstName, lastName, email];
  const queryStr = `INSERT INTO users (username, password, firstName, lastName, email) VALUES ($1, $2, $3, $4, $5) RETURNING username`;
  db.query(queryStr, values)
    .then((res) => {
      console.log(res.rows[0]);
      // res.locals.username = res.rows[0].username;
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next({
        message: err.message,
        log: "error in authController.createUser",
      });
    });
};

/*_______THIS WAS NOT FULLY IMPLEMENTED, it seems like db.query is running before bcrypt.hash finishes running, 
but async or promise chaining is not working _______*/
authController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const queryStr = 'SELECT username, password FROM users WHERE username = $1';
  const values = [username];
  db.query(queryStr, values)
    .then(data => {
      console.log(data.rows);
      return next();
    })

  // try {
  //   const { username, password } = req.body;
  //   const hash = bcrypt.hash(password, 10);
  //   db.query(
  //     `SELECT username, password FROM user_login WHERE username = '${username}' AND password = '${hash}'`
  //   )
  //     .then((data) => {
  //       console.log(`data.username ===`, data.username);
  //       if (!data) res.locals.username = null;
  //       else res.locals.username = data.username;
  //       console.log(`res.locals.username === `, res.locals.username);
  //       return next();
  //     })
  //     .catch((err) => {
  //       //______________
  //       console.log(
  //         `caught an error in database query in verifyUser middleware`
  //       );
  //       //______________
  //       return next(err);
  //     });
  // } catch (err) {
  //   //______________
  //   console.log(`entered big "catch block" of verifyUser middleware`);
  //   //______________
  //   return next(err);
  // }
};

//_______THIS WAS NOT IMPLEMENTED, BUT MAY BE USEFUL AS A STARTING POINT FOR SSID COOKIES _______
// authController.setSSIDCookie = (req, res, next) => {
//     try {
//         const { username } = req.body;
//         const query = `SELECT userLoginInfo(${username})`;
//         db.query(query)
//         .then((data) => {
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
