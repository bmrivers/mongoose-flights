var Flight = require('../models/flight')
var Ticket = require('../models/ticket')

module.exports = {
    create,
    new: newTicket,
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('./tickets/new', {
            title: 'New Ticket', 
            flight
        }); 
    });
}   
/*
function create(req, res) {
    Ticket.create(req.body, function(err, performer) {
        res.redirect('/tickets/new')
    });
}*/

function create(req, res, next) {
    Ticket.create({flight: req.params.id, seat: req.body.seat, price: req.body.price}, function(err, ticket) {
        res.redirect(`/flights/${ticket.flight}`);
    });
}
