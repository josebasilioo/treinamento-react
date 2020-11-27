const keystone = require("keystone")

const { Types } = keystone.Field

const redesSociais = new keystone.List("redesSociais", {
    map: { name: "key" },
    unique: true,
    nocreate: true,
    nodelete: true
})

redesSociais.add({
    key: {
        type: Types.Text,
        value: "Redes sociais",
        noedit: true
    },
    instagram: {
        type: Types.Url,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    youtube: {
        type: Types.Url,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    email: {
        type: Types.Email,
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