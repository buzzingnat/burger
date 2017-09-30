var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// display all
router.get("/", function(request, response) {
    burger.read(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
    });
});

// create one new burger
router.post("/", function(request, response) {
    // check string length client side
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        request.body.burger_name, false
    ], function() {
        response.redirect("/");
    });
});

// edit one burger
router.put("/:id", function(request, response) {
    console.log(`trying to eat a burger...`);
    var condition = "id = " + request.params.id;

    // console.log("condition", condition);
    // console.log("devoured?", request.body.devoured);

    burger.updateOne({
        devoured: request.body.devoured
    }, condition, function() {
        response.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
