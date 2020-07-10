const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    dishes:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Dish'
	}],

    postedBy:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
},{
    timestamps: true
});

var Favorites = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorites;