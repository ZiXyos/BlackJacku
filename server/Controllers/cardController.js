const mongoose = require("mongoose");
const card = require("../Models/cards");

const cardEvent = require("../Logic/deck");

exports.setCard = async(req, res, next) => {

    var card_tab = ["Pique", "Coeur", "Trefle", "Carreaux"];
    var colors = ["rouge", "noir"];

    var j = 0;
    var t = 0;
    var id;

    var values = 0;

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

       /*  console.log({

            card: { id: "0" + j,
                    signe: card_tab[t],
                    nbr: j,
                    value: values,
                    name: card_tab[t] + "_" + j,
                    id: "0"+ j + t + "_" + values
            },
        });*/
        card.create({

            value: values,
            nbr: j,
            sign: card_tab[t],
            colors: "colors run",
            name: card_tab[t] + "_" + j,
            id: "0" + j + t + "_" + values
        });
        res.json(card)
    }

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