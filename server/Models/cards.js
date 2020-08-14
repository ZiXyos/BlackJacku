const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const cardsSchema = new Schema({

    value: {
        type: Number,
        required: true
    },
    nbr: {
        type: Number,
        required: true
    },
    sign: {
        type: String,
        required: true
    },
    colors: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    id: {
        type: String,
    }
});

module.exports = Card = mongoose.model("card", cardsSchema);

function card(value, sign, colors) {
  value = 2;
  var signe = 1;
  var couleur = 1;
  if (signe == 1 && couleur <= 2) {
    colors = "Rouge";
    sign = "Carreau";
    for (var i = 2; i < 15; i++) {
      if (i == 11) {
          value--;
          card["Valet " + "de " + sign] = new card(value, sign, colors);
      }
      else if (i == 12)
          card["Dame " + "de " + sign] = new card(value, sign, colors);
      else if (i == 13)
          card["Roi " + "de " + sign] = new card(value, sign, colors);
      else if (i == 14) {
          value++;
          card["As " + "de " + sign] = new card(value, sign, colors);
      }
      else {
          card[i + " de "+ sign] = new card(value, sign, colors);
          value++;
      }
  }
  couleur++;
  signe++;
  value = 2;
  }
  if (signe == 2 && couleur <= 2) {
      colors = "Rouge";
      sign = "Coeur";
      for (var i = 2; i < 15; i++) {
          if (i == 11) {
              value--;
              card["Valet " + "de " + sign] = new card(value, sign, colors);
          }
          else if (i == 12)
              card["Dame " + "de " + sign] = new card(value, sign, colors);
          else if (i == 13)
              card["Roi " + "de " + sign] = new card(value, sign, colors);
          else if (i == 14) {
              value++;
              card["As " + "de " + sign] = new card(value, sign, colors);
          }
          else {
              card[i + " de "+ sign] = new card(value, sign, colors);
              value++;
          }
      }
      signe++;
      value = 2;
      couleur++;
      }
      if (signe == 3 && couleur > 2) {
          colors = "Noire";
          sign = "Pique"
          for (var i = 2; i < 15; i++) {
              if (i == 11) {
                  value--;
                  card["Valet " + "de " + sign] = new card(value, sign, colors);
              }
              else if (i == 12)
                  card["Dame " + "de " + sign] = new card(value, sign, colors);
              else if (i == 13)
                  card["Roi " + "de " + sign] = new card(value, sign, colors);
              else if (i == 14) {
                  value++;
                  card["As " + "de " + sign] = new card(value, sign, colors);
              }
              else {
                  card[i + " de "+ sign] = new card(value, sign, colors);
                  value++;
              }
          }
          signe++;
          value = 2;
          }
          if (signe == 4 && couleur > 2) {
              colors = "Noire";
              sign = "Trèfle"
              for (var i = 2; i < 15; i++) {
                  if (i == 11) {
                      value--;
                      card["Valet " + "de " + sign] = new card(value, sign, colors);
                  }
                  else if (i == 12)
                      card["Dame " + "de " + sign] = new card(value, sign, colors);
                  else if (i == 13)
                      card["Roi " + "de " + sign] = new card(value, sign, colors);
                  else if (i == 14) {
                      value++;
                      card["As " + "de " + sign] = new card(value, sign, colors);
                  }
                  else {
                      card[i + " de "+ sign] = new card(value, sign, colors);
                      value++;
                  }
              }
            //   signe++;
            //   value = 2;
              console.log(card);
            //   return(card(value, sign, colors));
            }
        }
