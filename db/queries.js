const database = require("./knex-config");

// can I set up a db var like: const db = 'database('coffees')'

module.exports = {
    list(){
        return database('coffees')
    },
    create(coffee){
        return database('coffees')
        .insert(coffee)
        .returning('*')
        .then(record => record[0])
    },
    read(id){
        return database('coffees')
        .select()
        .where('id', id)
        .first()
    },
    update(id, coffee){
        return database('coffees')
        .update(coffee)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    delete(id){
        return database('coffees')
        .delete()
        .where('id', id)
    }
};
