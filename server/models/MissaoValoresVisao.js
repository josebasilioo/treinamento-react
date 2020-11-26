const keystone = require("keystone")

const { Types } = keystone.Field

const missaoValoresVisao = new keystone.List("missaoValoresVisao", {
    map: { name: "key" },
    unique: true,
    nodelete: true,
    nocreate: true
})

missaoValoresVisao.add({

    key: {
        type: Types.Text,
        value: "Missão, valores e visão",
        noedit: true
    },
    missao: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    valores: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    visao: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    }


})

missaoValoresVisao.register()