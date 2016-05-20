/**
 * Created by Shawn on 5/16/2016.
 */
var Deeds = require("../model/deeds.js");
var path = require('path');

module.exports = function(app) {
// this route returns all of the items from the deeds table


    app.get('/deeds', function(req, res) {
        console.log("deeds route selected...");
        Deeds.findAll()
            .then(function (result) {
                console.log("find All Results...." + result);
                res.json(result);
            });


    });
// this route adds a new deed event to the database
    app.post('api/deeds/new', function (req, res) {

        var deed = req.body;


        Deed.create({
            //deed creation details
            title: deed.name,
            location: deed.location,
            date_start: deed.date_start,
            date_end: deed.date_end,
            description: deed.description,
            image: deed.image_url,
            slots: deeds.slots,
            sponsor: deeds.sponsor,
            sponsor_img: deeds.sponsor_image,
            deed_coin_val: deeds.deed_coins
        });
    })
};