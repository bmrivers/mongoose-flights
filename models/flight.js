var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA', 'ORD']
    },
    arrives: {
        type: Date,
    },
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Alaska'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA', 'ORD'],
    },
    flightNum: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function() {
            let today = new Date();
            today.setMonth = today.getMonth() + 1;
            today.setFullYear = today.getFullYear + 1;
            return today;
        }
    },
    destinations: [destinationSchema],
    tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]
});

module.exports = mongoose.model('flight', flightSchema);