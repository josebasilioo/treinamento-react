const keystone = require("keystone")
const proposito = keystone.list("proposito").model

const handlers = {

    getProposito: function (req, res) {

        proposito.find().exec(function (err, data) {
            if (err) {
                res.status(500).send("DB Error")
            } else {
                res.status(200).send(data)
            }
        })

    }

}

module.exports = handlers