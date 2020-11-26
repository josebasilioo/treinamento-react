const keystone = require('keystone');

const banner = keystone.list('banner').model;

const handlers = {
    getBanner: function (req, res) {
        banner.find().exec(function (err, data) {
            if (err) {
                console.log(err);
                res.status(500).send('DB Error');
            }
            res.status(200).send(data)
        });
    }
}

module.exports = handlers;