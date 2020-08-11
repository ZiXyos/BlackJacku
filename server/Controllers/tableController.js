const mongoose = require("mongoose");
const Table = require("../Models/table.js");

exports.createTable = async(req, res, next) => {

    const { name } = req.body;
    const regEx = "/^[A-Za-z\s]+$/";

   /*if (regEx.test("caca")) {
        res.status(400).json({ regularExp: "Bad Character pls use regular Expression" });
        throw "Pls Give Only Available character [ A-Za-z ]";
    }
*/
    const gameTableExist = await Table.findOne( { name });

    if(gameTableExist) {

        res.status(400).json({ gameTableExist: "Table name alerady exist"});
        throw "pls use anoder name the chat room name alerady exist";
    }

    const gameTable = new Table({ name });
    console.log(name);
    await gameTable.save({

        message: "Chatroom " + name + " Created 🤴🏾"
    });
    res.json({ message: "Game Table: " + name + " Created 🤴🏾" })

}