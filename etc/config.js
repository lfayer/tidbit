
module.exports = {
  port: process.env.PORT || 3000,
  postgres: {
        hostname: 'localhost',
        port: 5432,
        database: 'tidbit',
        /* These should be changed */
        username: 'tidbit',
        password: 'tidbit'
    }
}
