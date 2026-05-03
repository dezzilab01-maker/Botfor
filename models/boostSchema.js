const mongoose = require('mongoose');

const boostSchema = new mongoose.Schema({
    UserID: {
        type: String,
    },
    Count: {
    	type: Number,
    }

});

module.exports = mongoose.model('boosts', boostSchema);