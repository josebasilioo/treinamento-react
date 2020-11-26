const keystone = require("keystone")
const quemSomos = keystone.list("quemSomos").model

const handlers = {
    getWhoWeAre: function (req, res) {

        quemSomos.find().exec(function (err, data) {
            if (err) {
                res.status(500).send("DB Error")
            } else {
                res.status(200).send(data)
            }
        })


    }
}

module.exports = handlers