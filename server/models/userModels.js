const { Pool } = require('pg');

const PG_URI = 'postgres://ikdvjxln:e4L33pn0X5g52n5ULGN2zkVmSHHoZ05l@rajje.db.elephantsql.com/ikdvjxln'

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    // console.log(pool.query(text, params, callback));
    return pool.query(text, params, callback);
  },
};

