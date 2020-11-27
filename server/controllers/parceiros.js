const keystone = require('keystone');

const parceiros = keystone.list('parceiros').model;

const handlers = {
    getParceiros: function (req, res) {
        parceiros.find().exec(function (err, data) {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            }
            res.status(200).send(data)
        });
    }
}

module.exports = handlers;