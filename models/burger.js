// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    read: function(callback) {
        orm.read("burgers", function(response) {
            callback(response);
        });
    },
    // columns and values are arrays;
    insertOne: function(columns, values, callback) {
        orm.create("burgers", [`burger_name`, `devoured`], values, function(response) {
            callback(response);
        });
    },
    // An example of objColVals would be {description: chicken patty, devoured: false}
    updateOne: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(response) {
            callback(response);
        });
    }
};

module.exports = burger;
