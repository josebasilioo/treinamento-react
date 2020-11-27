const keystone = require("keystone")
const redesSociais = keystone.list("redesSociais").model

const handlers = {

    getSocialMedias: function (req, res) {

        redesSociais.find().exec( function (err, data) {
            if (err) {
                res.status(500).send("DB Error")
            } else {
                res.status(200).send(data)
            }
        } )

    }

}

module.exports = handlers