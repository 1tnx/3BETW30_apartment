const Apartment = require('../models/apartmentModel')
const connection = require('../db.js')

exports.apartmentDisplay = function (req, res) {
    let apartment = new Apartment();
    connection.query(' SELECT * from rooms;', function (error, resultSQL) {
        if (error) {
            res.status(400).send(error)
        } 
        else {
            res.status(200)
            result = resultSQL
            console.log(result)
            for (let i = 0; i < resultSQL.length; i++) {
                //apartment.addRoom([resultSQL[i].name, resultSQL[i].length, resultSQL[i].width])
            }
            res.render("apartment.ejs", {roomList: result});
        }
    });
}