const keystone = require("keystone")

const { Types } = keystone.Field

const redesSociais = new keystone.List("redesSociais", {
    map: { name: "key" },
    unique: true,
    nodelete: true,
    nocreate: true
})

redesSociais.add({
    key: {
        type: Types.Text,
        value: "Redes sociais",
        noedit: true
    },
    instagram: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    youtube: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    email: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    localizacao: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    }

})

redesSociais.register()