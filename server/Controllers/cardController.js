const mongoose = require("mongoose");
const Cards = require("../Models/cards");

const cardEvent = require("../Logic/deck");

exports.setCard = async(req, res, next) => {

    var card_tab = ["Pique", "Coeur", "Trefle", "Carreaux"];
    var colors = ["rouge", "noir"];

    var j = 0;
    var t = 0;
    var id;

    var values = 0;
    const arr = new Array;

    const newCard = new Card({

        value: "",
        nbr: "",
        sign: "",
        colors: "",
        name: "",
        id:"",
    });

    for (var i = 0; i <= 51 ;i++ ) {

        if (j == 13) {

            j = 0;
            values = 0;
            t++;
        }

        j++;
        values ++;

        if (j > 10) {

            values = 10;
        }

        newCard.value = values;
        newCard.nbr = j;
        newCard.sign = card_tab[t];
        newCard.colors = "colors run";
        newCard.name = card_tab[t] + "_" + j;
        newCard.id = "0" + j + t + "_" + values;

    }
    arr.push(newCard)

    console.log(arr);

}

exports.getShuffledCard = async(req, res, next) => {

    const { id } = req.body;

    console.log(id);

    /*card.find({}, function(err, card) {

        var cardMap = {};
        id.forEach(function(cards) {

            cardMap[id._id] = cards;
        });

        console.log(cardMap);
      });*/
}

exports.getPickedCard = async(req, res, next) => {

    const { id } = req.body;

}