const Room = require('../models/roomModel')
const connection = require('../db.js')

roomList = []

exports.showRoom = function (req, res) {
    res.render("room.ejs");
}

exports.addRoom = function (req, res) {
    let name = req.body["room"];
    let length = req.body["length"];
    let width = req.body["width"];

    let room = new Room(name, length, width);

    let vals = {name: room.name, length: room.length, width: room.width}

    connection.query('INSERT INTO rooms set ?', vals, function (error, resultSQL) {
        if (error) {
          res.status(400).send(error)
        }
    })

    res.redirect("/apartment");
}
