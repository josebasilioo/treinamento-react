const keystone = require("keystone")
const missaoValoresVisao = keystone.list("missaoValoresVisao").model

const handlers = {

    getmissaoValoresVisao: function (req, res) {

        missaoValoresVisao.find().exec(function (err, data) {
            if (err) {
                res.status(500).send("DB Error")
            } else {
                res.status(200).send(data)
            }
        })

    }

}

module.exports = handlers