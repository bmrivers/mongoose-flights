var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    flightNum: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departDate: {
        type: Date,
        default: function() {
            let today = new Date();
            today.setMonth = today.getMonth() + 1;
            today.setFullYear = today.getFullYear + 1;
            return today;
        }
    }
})

module.exports = mongoose.model('flight', flightSchema);