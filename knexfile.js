// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres:///g-mem-2'
  },
// only changed the dev object in this one
  

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres:///g-mem-2'
  }

};
